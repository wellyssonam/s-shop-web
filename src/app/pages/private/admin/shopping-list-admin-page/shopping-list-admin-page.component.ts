import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin, ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { ProductService } from './../../../../services/product/product.service';

@Component({
  selector: 'app-shopping-list-admin-page',
  templateUrl: './shopping-list-admin-page.component.html',
  styleUrls: ['./shopping-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListAdminPageComponent implements OnInit {

  products: Product[];

  listLinkBreadcrumb = [];

  orderListLocalStorage;

  USER_ID;

  orderList$ = new ReplaySubject<any[]>();

  constructor(
    private shoppingListService: ShoppingListService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.mountBreadcrumb();
    this.USER_ID = this.shoppingListService.USER_ID;
    this.shoppingListService.initializeOrderListLocalStorage();
    this.orderListLocalStorage = this.shoppingListService.getOrderListLocalStorage();
    this.orderListLocalStorage = this.orderListLocalStorage.filter(order => order.userId === this.USER_ID)[0];
    forkJoin([
      this.shoppingListService.orderList(),
      this.productService.list(),
    ]).subscribe(res => this.handleFetchInitialDataSuccess(res));
  }

  mountBreadcrumb() {
    this.listLinkBreadcrumb.push({ name: 'Admin', link: ALL_ROUTES.private.admin.productList });
    this.listLinkBreadcrumb.push({ name: 'Compras', link: ALL_ROUTES.private.admin.orderList });
  }

  handleFetchInitialDataSuccess(result) {
    this.products = result[1];
    const orderList = result[0].filter(order => order.user_id === this.USER_ID);
    const orderListIds = orderList.map(order => order.id);

    forkJoin(this.shoppingListService.searchMultipleOrders(orderListIds)).subscribe(
      res => this.buildOrderListTable(res)
    );
  }

  buildOrderListTable(data) {
    const result = data.map(order => (
      {
        orderId: order.id,
        orderName: this.getOrderName(order.id),
        amount: order.items.length,
        total: this.getAmountCashProduct(order)
      }
    ));
    this.orderList$.next(result);
  }

  getOrderName(orderId) {
    const result = this.orderListLocalStorage.orderList.filter(data => data.orderId === orderId);
    return result.length > 0 ? result[0].orderName : '-';
  }

  getAmountCashProduct(data): number {
    let amount = data.items.map(res => [res.amount, this.products.filter(product => product.id === res.product_id)[0].price]);
    amount = amount.map(res => res[0] * res[1]).reduce((num1, num2) => num1 + num2);
    return amount;
  }
}
