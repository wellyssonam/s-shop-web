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

  purchaseName: string;

  orderListLocalStorage;

  listLinkBreadcrumb = [];

  purchasesList$ = new ReplaySubject<any[]>();

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.fetchAllProduct();
  }

  mountBreadcrumb() {
    this.listLinkBreadcrumb.push({ name: 'Cesta', link: ALL_ROUTES.private.common.shoppingList });
  }

  fetchAllProduct() {
    this.mountBreadcrumb();
    this.shoppingListService.initializeOrderListLocalStorage();
    this.orderListLocalStorage = this.shoppingListService.getOrderListLocalStorage();
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
    const orderListLocalStorageAux = this.orderListLocalStorage.filter(order => order.userId !== USER_ID);
    const orderListLocalStorageByUserId = this.orderListLocalStorage.filter(order => order.userId === USER_ID)[0];
    orderListLocalStorageByUserId.orderList.push({ orderName: this.purchaseName, orderId: data.id });
    orderListLocalStorageAux.push(orderListLocalStorageByUserId);
    this.shoppingListService.updateOrderListLocalStorage(orderListLocalStorageAux);
    this.shoppingListService.updateShoppingListLocalStorage([]);
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
