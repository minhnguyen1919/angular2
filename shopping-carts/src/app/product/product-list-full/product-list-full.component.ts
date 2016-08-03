import { Component } from '@angular/core';

import { ProductListComponent } from './product-list';
import { ProductFilterComponent } from './product-filter';

@Component({
  selector: 'product-list-full',
  template: require('./product-list-full.component.jade'),
  directives: [
    ProductListComponent,
    ProductFilterComponent
  ]
})

export class ProductListFullComponent {

}
