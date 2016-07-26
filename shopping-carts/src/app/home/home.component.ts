import { Component } from '@angular/core';

import { ProductListComponent } from '../product';

@Component({
  selector: 'home',
  template: require('./home.component.jade'),
  directives: [
    ProductListComponent
  ]
})

export class HomeComponent {

}
