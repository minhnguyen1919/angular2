import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from './shared';

@Component({
  selector: 'product',
  template: require('./product.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ProductService
  ]
})

export class ProductComponent {

}
