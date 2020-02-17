import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

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
