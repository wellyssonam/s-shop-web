import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductServiceModule { }
