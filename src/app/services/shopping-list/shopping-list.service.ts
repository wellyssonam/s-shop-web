import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

const API_URL = 'https://s-shop-test.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  USER_ID = 82;

  purchasesCount$ = new ReplaySubject<number>();

  constructor(private http: HttpClient) { }

  getPurchasesCount() {
    return this.purchasesCount$;
  }

  setPurchasesCount(quantity: number) {
    return this.purchasesCount$.next(quantity);
  }

  initializeShoppingListLocalStorage() {
    if (JSON.parse(localStorage.getItem('shoppingList')) == null) {
      localStorage.setItem('shoppingList', JSON.stringify(
        {
          userId: this.USER_ID,
          items: [],
        }
      ));
    }
  }

  updateShoppingListLocalStorage(productList) {
    localStorage.setItem('shoppingList', JSON.stringify(
      {
        userId: this.USER_ID,
        items: productList,
      }
    ));
  }

  getPurchasesLocalStorage() {
    const data = JSON.parse(localStorage.getItem('shoppingList'));
    return data !== null ? data.items.map(res => ({
      id: res.product.id,
      name: res.product.name,
      description: res.product.description,
      price: res.product.price,
      amount: res.amount,
      cashAmount: res.amount * res.product.price,
    })) : [];
  }

  updatePurchasesLocalStorage(data) {
    localStorage.setItem('shoppingList', JSON.stringify(
      {
        userId: 85,
        items: data,
      }
    ));
  }

  deleteItemPurchasesLocalStorage(id) {
    let data = JSON.parse(localStorage.getItem('shoppingList'));
    data = data !== null ? data.items
      .filter(res => res.product.id !== id)
      .map(res => ({
        product: {
          id: res.product.id,
          name: res.product.name,
          description: res.product.description,
          price: res.product.price,
        },
        amount: res.amount,
      })) : [];
    this.updatePurchasesLocalStorage(data);
    this.setPurchasesCount(data.length);
  }

  finishShoppingList(query): any {
    const data = this.http.post<any>(API_URL + '/order', query);
    localStorage.clear();
    return data;
  }

  orderList(): any {
    return this.http.get<any>(API_URL + '/order');
  }

  searchOrder(id): any {
    return this.http.get<any[]>(`${API_URL}/order/${id}`);
  }

  searchMultipleOrders(ids): any {
    return ids.map(id => this.http.get<any[]>(`${API_URL}/order/${id}`));
  }

  initializeOrderListLocalStorage() {
    if (JSON.parse(localStorage.getItem('orderList')) == null) {
      this.updateOrderListLocalStorage([{ userId: this.USER_ID, orderList: [] }]);
    } else {
      const result = JSON.parse(localStorage.getItem('orderList'));
      if (result.filter(data => data.userId === this.USER_ID).length === 0) {
        result.push({ userId: this.USER_ID, orderList: [] });
        this.updateOrderListLocalStorage(result);
      }
    }
  }

  updateOrderListLocalStorage(orderList) {
    localStorage.setItem('orderList', JSON.stringify(orderList));
  }

  getOrderListLocalStorage(): any {
    return JSON.parse(localStorage.getItem('orderList'));
  }
}
