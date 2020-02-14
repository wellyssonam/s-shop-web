import { Component, OnInit } from '@angular/core';
import { ALL_ROUTES } from 'src/app/pages/pages-routing.map';

@Component({
  selector: 'app-app-wrapper-private-admin',
  templateUrl: './app-wrapper-private-admin.component.html',
  styleUrls: ['./app-wrapper-private-admin.component.scss']
})
export class AppWrapperPrivateAdminComponent implements OnInit {

  allRoutes = ALL_ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
