import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListModule } from 'src/app/components/product/product-list/product-list.module';
import { ShoppingListAdminPageRoutingModule } from './shopping-list-admin-page-routing.module';
import { ShoppingListAdminPageComponent } from './shopping-list-admin-page.component';



@NgModule({
  declarations: [ShoppingListAdminPageComponent],
  imports: [
    CommonModule,
    ShoppingListAdminPageRoutingModule,
    ProductListModule,
  ]
})
export class ShoppingListAdminPageModule { }
