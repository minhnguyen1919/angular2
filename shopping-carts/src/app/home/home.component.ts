import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductListComponent } from '../product';

@Component({
  selector: 'home',
  template: require('./home.component.jade'),
  directives: [
    ROUTER_DIRECTIVES,
    ProductListComponent
  ]
})

export class HomeComponent {

}
