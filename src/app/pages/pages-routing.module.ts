import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperPrivateAdminComponent, AppWrapperPrivateAdminModule } from '../components/layout/app-wrapper-private/app-wrapper-private-admin';
import { AppWrapperPrivateCommonComponent, AppWrapperPrivateCommonModule } from './../components/layout/app-wrapper-private/app-wrapper-private-common';

const routes: Routes = [
  {
    path: '',
    component: AppWrapperPrivateCommonComponent,
    loadChildren: () =>
      import('./private/private-page.module').then(
        module => module.PrivatePageModule
      ),
  },
  {
    path: 'admin',
    component: AppWrapperPrivateAdminComponent,
    loadChildren: () =>
      import('./private/admin/private-admin-pages.module').then(
        module => module.PrivateAdminPagesModule
      ),
  },
];

@NgModule({
  imports: [
    AppWrapperPrivateCommonModule,
    AppWrapperPrivateAdminModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PagesRoutingModule { }
