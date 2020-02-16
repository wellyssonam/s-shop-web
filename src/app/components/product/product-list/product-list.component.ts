import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'value', 'button'];

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

  constructor() { }

  ngOnInit(): void {
    this.buildTable();
  }

  buildTable() {
    let dataSourceAux;

    this.loading$.next(true);
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.showAmountLine ? null : this.paginator;
    dataSourceAux = this.dataSource.filteredData;
    if (!this.showAmountLine) {
      dataSourceAux = dataSourceAux.slice(0, this.pageSizeOptions[0]);
    } else {
      this.paginationRef.nativeElement.style.display = 'none';
    }
    this.totalCost$.next(this.getTotalCost(dataSourceAux));
    this.loading$.next(false);
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

  deleteProduct() {
    console.log('>>> delete Product');
  }
}
