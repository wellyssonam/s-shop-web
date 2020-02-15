import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../services/product.service';

@Component({
  selector: 'app-product-list-admin-page',
  templateUrl: './product-list-admin-page.component.html',
  styleUrls: ['./product-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    return this.productService.list().subscribe(res => console.log(res));
  }

}
