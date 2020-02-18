import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ShoppingListService } from './../../../../services/shopping-list/shopping-list.service';

const USER_ID = 82;

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListPageComponent implements OnInit {

  purchasesList$ = new ReplaySubject<any[]>();

  purchaseName: string;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.fetchAllProduct();
  }

  fetchAllProduct() {
    const purchasesList = this.shoppingListService.getPurchasesLocalStorage();
    this.purchasesList$.next(purchasesList);
  }

  getPurchasesCount = () => {
    return this.shoppingListService.getPurchasesCount();
  }

  finish() {
    let purchasesList = this.shoppingListService.getPurchasesLocalStorage();
    purchasesList = purchasesList.map(data => ({
      product_id: data.id,
      amount: parseInt(data.amount),
    }));
    const result = {
      user_id: USER_ID,
      items: purchasesList,
    };
    this.shoppingListService.finishShoppingList(result).subscribe(res => this.handleFinishSuccess(res));
  }

  handleFinishSuccess(data: any) {
    this.shoppingListService.updateLocalStorage([]);
    this.shoppingListService.setPurchasesCount(0);
    this.router.navigate([ALL_ROUTES.private.common.home]);
    this.openAlertMessage('Compra realizada com sucesso', 4000);
  }

  openAlertMessage(message: string, time: number) {
    this.snackBar.open(message, 'Fechar', {
      duration: time,
    });
  }
}
