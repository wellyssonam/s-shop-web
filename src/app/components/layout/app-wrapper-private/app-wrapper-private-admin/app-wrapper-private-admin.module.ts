import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppWrapperPrivateAdminComponent } from './app-wrapper-private-admin.component';

@NgModule({
  declarations: [AppWrapperPrivateAdminComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [AppWrapperPrivateAdminComponent],
})
export class AppWrapperPrivateAdminModule { }
