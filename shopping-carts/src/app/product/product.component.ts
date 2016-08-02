import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-product',
  template: require('./product.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ProductComponent {

}
