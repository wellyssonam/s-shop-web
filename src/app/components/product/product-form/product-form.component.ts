import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {

  productData = new Product();

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    console.log('>>> add product');
    console.log(this.productData);
  }
}
