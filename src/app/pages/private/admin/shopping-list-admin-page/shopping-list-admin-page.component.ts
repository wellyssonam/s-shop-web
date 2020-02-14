import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-admin-page',
  templateUrl: './shopping-list-admin-page.component.html',
  styleUrls: ['./shopping-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListAdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
