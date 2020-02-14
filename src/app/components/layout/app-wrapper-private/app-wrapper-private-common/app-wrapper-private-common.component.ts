import { Component, OnInit } from '@angular/core';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';

@Component({
  selector: 'app-app-wrapper-private-common',
  templateUrl: './app-wrapper-private-common.component.html',
  styleUrls: ['./app-wrapper-private-common.component.scss']
})
export class AppWrapperPrivateCommonComponent implements OnInit {

  allRoutes = ALL_ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
