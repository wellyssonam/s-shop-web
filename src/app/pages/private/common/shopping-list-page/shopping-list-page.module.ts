import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListPageRoutingModule } from './shopping-list-page-routing.module';
import { ShoppingListPageComponent } from './shopping-list-page.component';



@NgModule({
  declarations: [ShoppingListPageComponent],
  imports: [
    CommonModule,
    ShoppingListPageRoutingModule,
  ]
})
export class ShoppingListPageModule { }
