import { Component } from '@angular/core';

import { ProductListComponent } from '../product-list';
import { APP_CONSTANT } from '../../app.constant';

@Component({
  selector: 'sidebar',
  template: require('./sidebar.component.jade'),
  directives: [
    ProductListComponent
  ]
})

export class SidebarComponent {
  limitItemPerRow = APP_CONSTANT.product.limitItemPerRow;
}