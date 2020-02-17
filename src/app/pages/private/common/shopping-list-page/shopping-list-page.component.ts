import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListPageComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.buildTable();
  }

  buildTable() {
    // this.loading$.next(true);
    this.initializaLocalStorage();
    // if (this.addButton) {
    //   this.displayedColumns = this.displayedColumns.filter(res => res !== 'button');
    // } else {
    //   this.displayedColumns = this.displayedColumns.filter(res => res !== 'buttonQuantity');
    // }
    this.shoppingListService.setPurchasesCount(this.getLocalStorageItemsLength());
    // this.setCurrentDataSource(this.products);
    // this.loading$.next(false);
  }

  initializaLocalStorage() {
    if (JSON.parse(localStorage.getItem('shoppingList')) == null) {
      localStorage.setItem('shoppingList', JSON.stringify(
        {
          userId: 85,
          items: [],
        }
      ));
    }
  }

  getLocalStorageItemsLength() {
    const data = JSON.parse(localStorage.getItem('shoppingList'));
    return data !== null ? data.items.length : 0;
  }
}
