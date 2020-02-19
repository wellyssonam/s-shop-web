import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListModule } from 'src/app/components/product/product-list/product-list.module';
import { ProductServiceModule } from 'src/app/services/product';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ProductListModule,
    ProductServiceModule,
  ]
})
export class HomePageModule { }
