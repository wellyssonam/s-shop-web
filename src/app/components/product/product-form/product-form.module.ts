import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  declarations: [
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    ProductFormComponent,
  ]
})
export class ProductFormModule { }
