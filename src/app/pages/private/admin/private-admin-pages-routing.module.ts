import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
  },
  {
    path: '',
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./product-list-admin-page/product-list-admin-page.module').then(
            module => module.ProductListAdminPageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./shopping-list-admin-page/shopping-list-admin-page.module').then(
            module => module.ShoppingListAdminPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PrivateAdminPagesRoutingModule { }
