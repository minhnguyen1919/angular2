import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductListComponent } from '../product';


import { APP_CONSTANT } from '../app.constant';

@Component({
  selector: 'main-home',
  template: require('./home.component.jade'),
  directives: [
    ROUTER_DIRECTIVES,
    ProductListComponent
  ]
})

export class HomeComponent {
  limitItemPerRow = APP_CONSTANT.product.limitItemPerRow;
}
