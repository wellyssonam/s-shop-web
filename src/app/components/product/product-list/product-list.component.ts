import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product';
import { ShoppingListService } from './../../../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];

  productList;

  dataSource;

  dataSource$ = new ReplaySubject();

  pageSizeOptions = [5, 10, 25, 100];

  showPagination$ = new BehaviorSubject<boolean>(true);

  totalCost$ = new ReplaySubject();

  cashAmount$ = new ReplaySubject();

  loading$ = new ReplaySubject<boolean>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('paginationRef', { static: true }) paginationRef: ElementRef;

  @Input() products: Product[];

  @Input() showAmountLine: boolean;

  @Input() showPrice: boolean;

  @Input() showValue: boolean;

  @Input() showAmount: boolean;

  @Input() showQuantity: boolean;

  @Input() addButton: boolean;

  @Input() deleteButton: boolean;

  @Input() deleteProductButton: boolean;

  @Input() showFilter = true;

  constructor(
    private productService: ProductService,
    private shoppingListService: ShoppingListService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.buildTable();
  }

  buildTable() {
    this.loading$.next(true);
    this.shoppingListService.initializaLocalStorage();
    if (this.showQuantity) {
      this.displayedColumns = ['showQuantity'].concat(this.displayedColumns);
    }
    if (this.showPrice) {
      this.displayedColumns.push('showPrice');
    }
    if (this.showAmount) {
      this.displayedColumns.push('showAmount');
    }
    if (this.addButton) {
      this.displayedColumns.push('buttonQuantity');
    }
    if (this.deleteButton) {
      this.displayedColumns.push('deleteButton');
    }
    if (this.deleteProductButton) {
      this.displayedColumns.push('deleteProductButton');
    }
    this.shoppingListService.setPurchasesCount(this.getLocalStorageItemsLength());
    this.setCurrentDataSource(this.products);
    this.loading$.next(false);
  }

  getLocalStorageItemsLength() {
    const data = JSON.parse(localStorage.getItem('shoppingList'));
    return data !== null ? data.items.length : 0;
  }

  setCurrentDataSource(products) {
    let dataSourceAux;
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.showAmountLine ? null : this.paginator;
    this.dataSource$.next(this.dataSource);
    dataSourceAux = this.dataSource.filteredData;
    if (!this.showAmountLine) {
      dataSourceAux = dataSourceAux.slice(0, this.pageSizeOptions[0]);
    } else {
      this.paginationRef.nativeElement.style.display = 'none';
    }
    this.totalCost$.next(this.getTotalCost(dataSourceAux));
    this.cashAmount$.next(this.getCashAmount(dataSourceAux));
  }

  applyFilter(event: Event) {
    let dataSourceAux;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    dataSourceAux = this.dataSource.filteredData;
    if (!this.showAmountLine) {
      this.dataSource.paginator.firstPage();
      dataSourceAux = dataSourceAux.slice(0, this.pageSizeOptions[0]);
    }
    this.dataSource$.next(this.dataSource);
    this.totalCost$.next(this.getTotalCost(dataSourceAux));
    this.cashAmount$.next(this.getCashAmount(dataSourceAux));
  }

  getTotalCost(dataSource) {
    return dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  getCashAmount(dataSource) {
    return dataSource.map(t => t.cashAmount).reduce((acc, value) => acc + value, 0);
  }

  deleteProduct(id) {
    this.productService.delete(id).subscribe(res => this.handleDeleteProductSuccess(id));
  }

  handleDeleteProductSuccess(id) {
    const products = this.products.filter(data => data.id !== id);
    this.setCurrentDataSource(products);
  }

  deleteItemShoppingList(id) {
    this.shoppingListService.deleteItemPurchasesLocalStorage(id);
    const purchasesList = this.shoppingListService.getPurchasesLocalStorage();
    this.dataSource$.next(purchasesList);
    this.shoppingListService.setPurchasesCount(purchasesList.length);
    this.cashAmount$.next(this.getCashAmount(purchasesList));
  }

  addPurchase(item, $event) {
    const productList = JSON.parse(localStorage.getItem('shoppingList')).items;
    const message = `
      Este produto já se encontra em sua CESTA de compras.
      Remova da CESTA para poder inserir novamente este produto.
    `
    if (productList.filter(data => data.product.id === item.id).length > 0) {
      this.openAlertMessage(message, 8000);
    } else {
      productList.push({ product: item, amount: $event.value });
      this.shoppingListService.updateLocalStorage(productList);
      this.shoppingListService.setPurchasesCount(productList.length);
    }
    $event.value = '';
  }

  openAlertMessage(message: string, time: number) {
    this.snackBar.open(message, 'Fechar', {
      duration: time,
    });
  }
}
