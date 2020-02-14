import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListAdminPageComponent } from './shopping-list-admin-page.component';

const routes: Routes = [{ path: '', component: ShoppingListAdminPageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ShoppingListAdminPageRoutingModule { }
