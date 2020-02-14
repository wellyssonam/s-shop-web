import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-admin-page',
  templateUrl: './product-list-admin-page.component.html',
  styleUrls: ['./product-list-admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
