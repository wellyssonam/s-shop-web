import { Component, OnInit } from '@angular/core';
import { ALL_ROUTES } from './../../../pages/pages-routing.map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  allRotes = ALL_ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
