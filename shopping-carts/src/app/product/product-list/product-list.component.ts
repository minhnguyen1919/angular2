import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Product, ProductService } from '../shared';

@Component({
  selector: 'product-list',
  template: require('./product-list.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ProductListComponent implements OnInit {

  @Input() start: number;
  @Input() end: number;

  products: Product[];
  type: string;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.router
      .routerState
      .queryParams
      .subscribe(params => {

        let getProductParams = {
          type: params['type'],
          start: this.start,
          end: this.end
        };

        this.getProduct(getProductParams);
      });
  }

  getProduct(params: any) {
    this.productService.getProducts(params)
      .subscribe(
        products => {
          this.products = products;
        },
        errors => {
          console.log(errors);
        }
      );
  }
}
