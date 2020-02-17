import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  displayedColumns: string[] = ['name', 'description', 'value', 'buttonQuantity', 'button'];

  dataSource;

  productList;

  pageSizeOptions = [5, 10, 25, 100];

  showPagination$ = new BehaviorSubject<boolean>(true);

  totalCost$ = new ReplaySubject();

  loading$ = new ReplaySubject<boolean>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('paginationRef', { static: true }) paginationRef: ElementRef;

  @Input() products: Product[];

  @Input() showAmountLine: boolean;

  @Input() addButton: boolean;

  constructor(
    private productService: ProductService,
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit(): void {
    this.buildTable();
  }

  buildTable() {
    this.loading$.next(true);
    this.initializaLocalStorage();
    if (this.addButton) {
      this.displayedColumns = this.displayedColumns.filter(res => res !== 'button');
    } else {
      this.displayedColumns = this.displayedColumns.filter(res => res !== 'buttonQuantity');
    }
    this.shoppingListService.setPurchasesCount(this.getLocalStorageItemsLength());
    this.setCurrentDataSource(this.products);
    this.loading$.next(false);
  }

  initializaLocalStorage() {
    if (JSON.parse(localStorage.getItem('shoppingList')) == null) {
      localStorage.setItem('shoppingList', JSON.stringify(
        {
          userId: 85,
          items: [],
        }
      ));
    }
  }

  updateLocalStorage(productList) {
    localStorage.setItem('shoppingList', JSON.stringify(
      {
        userId: 85,
        items: productList,
      }
    ));
  }

  getLocalStorageItemsLength() {
    const data = JSON.parse(localStorage.getItem('shoppingList'));
    return data !== null ? data.items.length : 0;
  }

  setCurrentDataSource(products) {
    let dataSourceAux;
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.showAmountLine ? null : this.paginator;
    dataSourceAux = this.dataSource.filteredData;
    if (!this.showAmountLine) {
      dataSourceAux = dataSourceAux.slice(0, this.pageSizeOptions[0]);
    } else {
      this.paginationRef.nativeElement.style.display = 'none';
    }
    this.totalCost$.next(this.getTotalCost(dataSourceAux));
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
    this.totalCost$.next(this.getTotalCost(dataSourceAux));
  }

  getTotalCost(dataSource) {
    return dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  deleteProduct(id) {
    this.productService.delete(id).subscribe(res => this.handleDeleteProductSuccess(id));
  }

  handleDeleteProductSuccess(id) {
    const products = this.products.filter(data => data.id !== id);
    this.setCurrentDataSource(products);
  }

  addPurchase(item, $event) {
    console.log('>>>>');
    const productList = JSON.parse(localStorage.getItem('shoppingList')).items;
    productList.push({ product_id: item.id, amount: $event.value });
    this.updateLocalStorage(productList);
    this.shoppingListService.setPurchasesCount(productList.length);
    $event.value = '';
  }
}
