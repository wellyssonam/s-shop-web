import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductListModule } from 'src/app/components/product/product-list/product-list.module';
import { ProductServiceModule } from 'src/app/services/product';
import { ShoppingListModule } from 'src/app/services/shopping-list/shopping-list.module';
import { ShoppingListPageRoutingModule } from './shopping-list-page-routing.module';
import { ShoppingListPageComponent } from './shopping-list-page.component';



@NgModule({
  declarations: [ShoppingListPageComponent],
  imports: [
    CommonModule,
    ShoppingListPageRoutingModule,
    ProductListModule,
    ProductServiceModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    ShoppingListModule,
    MatSnackBarModule,
  ]
})
export class ShoppingListPageModule { }
