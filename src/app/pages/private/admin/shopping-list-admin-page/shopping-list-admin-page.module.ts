import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListAdminPageRoutingModule } from './shopping-list-admin-page-routing.module';
import { ShoppingListAdminPageComponent } from './shopping-list-admin-page.component';



@NgModule({
  declarations: [ShoppingListAdminPageComponent],
  imports: [
    CommonModule,
    ShoppingListAdminPageRoutingModule,
  ]
})
export class ShoppingListAdminPageModule { }
