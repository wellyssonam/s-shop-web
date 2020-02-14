import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./common/home-page/home-page.module').then(
            module => module.HomePageModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/product-list-admin-page/product-list-admin-page.module').then(
            module => module.ProductListAdminPageModule
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
export class PrivatePageRoutingModule { }
