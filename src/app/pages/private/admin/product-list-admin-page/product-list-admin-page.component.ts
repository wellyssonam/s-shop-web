import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-product-list-admin-page',
  templateUrl: './product-list-admin-page.component.html',
  styleUrls: ['./product-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminPageComponent implements OnInit {

  productList$ = new ReplaySubject<Product[]>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchAllProduct();
  }

  fetchAllProduct() {
    return this.productService.list().subscribe(res => {
      this.productList$.next(res);
    });
  }
}
