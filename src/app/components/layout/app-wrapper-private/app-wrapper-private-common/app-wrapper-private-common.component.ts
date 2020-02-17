import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-app-wrapper-private-common',
  templateUrl: './app-wrapper-private-common.component.html',
  styleUrls: ['./app-wrapper-private-common.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppWrapperPrivateCommonComponent implements OnInit {

  allRoutes = ALL_ROUTES;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  getPurchasesCount() {
    return this.shoppingListService.getPurchasesCount();
  }
}
