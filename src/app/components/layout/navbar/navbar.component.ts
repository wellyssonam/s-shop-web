import { Component, OnInit } from '@angular/core';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  allRotes = ALL_ROUTES;

  constructor(private shoppingListService: ShoppingListService, ) { }

  ngOnInit() {
  }
}
