import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ProductService } from 'src/app/services/product';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-product-list-admin-page',
  templateUrl: './product-list-admin-page.component.html',
  styleUrls: ['./product-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminPageComponent implements OnInit {

  listLinkBreadcrumb = [];

  productList$ = new ReplaySubject<Product[]>();

  constructor(private productService: ProductService, private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.fetchAllProduct();
  }

  fetchAllProduct() {
    this.spinnerService.startLoading();
    this.mountBreadcrumb();
    return this.productService.list().subscribe(res => {
      this.productList$.next(res);
      this.spinnerService.stopLoading();
    });
  }

  mountBreadcrumb() {
    this.listLinkBreadcrumb.push({ name: 'Admin', link: ALL_ROUTES.private.admin.productList });
    this.listLinkBreadcrumb.push({ name: 'Produtos', link: ALL_ROUTES.private.admin.productList });
  }
}
