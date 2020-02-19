import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ProductService } from 'src/app/services/product/product.service';
import { SpinnerService } from './../../../../services/spinner/spinner.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  listLinkBreadcrumb = [];

  productList$ = new ReplaySubject<Product[]>();

  constructor(
    private productService: ProductService,
    private spinnerService: SpinnerService,
  ) { }

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
    this.listLinkBreadcrumb.push({ name: 'Home', link: ALL_ROUTES.private.common.home });
  }
}
