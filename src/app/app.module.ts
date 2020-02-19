import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/layout/navbar';
import { SpinnerService } from './services/spinner/spinner.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ShoppingListService,
    SpinnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
