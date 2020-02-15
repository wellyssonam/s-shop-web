import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductFormModule } from 'src/app/components/product/product-form/product-form.module';
import { ProductServiceModule } from 'src/app/services/product-service.module';
import { ProductListAdminPageRoutingModule } from './product-list-admin-page-routing.module';
import { ProductListAdminPageComponent } from './product-list-admin-page.component';



@NgModule({
  declarations: [ProductListAdminPageComponent],
  imports: [
    CommonModule,
    ProductFormModule,
    ProductListAdminPageRoutingModule,
    ProductServiceModule,
  ]
})
export class ProductListAdminPageModule { }
