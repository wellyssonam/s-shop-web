import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListAdminPageRoutingModule } from './product-list-admin-page-routing.module';
import { ProductListAdminPageComponent } from './product-list-admin-page.component';



@NgModule({
  declarations: [ProductListAdminPageComponent],
  imports: [
    CommonModule,
    ProductListAdminPageRoutingModule,
  ]
})
export class ProductListAdminPageModule { }
