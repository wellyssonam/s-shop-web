import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AppWrapperPrivateCommonComponent } from './app-wrapper-private-common.component';



@NgModule({
  declarations: [AppWrapperPrivateCommonComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [AppWrapperPrivateCommonComponent],
})
export class AppWrapperPrivateCommonModule { }
