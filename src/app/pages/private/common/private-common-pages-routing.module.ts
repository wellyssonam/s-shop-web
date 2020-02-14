import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home-page/home-page.module').then(
            module => module.HomePageModule
          ),
      },
      {
        path: 'shopping-list',
        loadChildren: () =>
          import('./shopping-list-page/shopping-list-page.module').then(
            module => module.ShoppingListPageModule
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
export class PrivateCommonPagesRoutingModule { }
