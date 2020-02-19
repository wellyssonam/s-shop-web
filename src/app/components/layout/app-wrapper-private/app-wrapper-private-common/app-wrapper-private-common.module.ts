import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ShoppingListModule } from 'src/app/services/shopping-list/shopping-list.module';
import { AppWrapperPrivateCommonComponent } from './app-wrapper-private-common.component';



@NgModule({
  declarations: [AppWrapperPrivateCommonComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    ShoppingListModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  exports: [AppWrapperPrivateCommonComponent],
})
export class AppWrapperPrivateCommonModule { }
