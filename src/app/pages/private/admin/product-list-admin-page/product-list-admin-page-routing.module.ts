import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListAdminPageComponent } from './product-list-admin-page.component';

const routes: Routes = [{ path: '', component: ProductListAdminPageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductListAdminPageRoutingModule { }
