import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  purchasesCount$ = new BehaviorSubject<number>(0);

  constructor() { }

  getPurchasesCount() {
    return this.purchasesCount$;
  }

  setPurchasesCount(quantity: number) {
    return this.purchasesCount$.next(quantity);
  }
}
