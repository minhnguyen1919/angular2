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

  @Input() start: string;
  @Input() sort: string;
  @Input() order: string;
  @Input() limit: string;
  @Input() displayType: any;

  products: Product[];
  type: string;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.displayType = this.displayType || 1;

    this.router
      .routerState
      .queryParams
      .subscribe(params => {

        let getProductParams = {
          type: params['type'],
          start: this.start,
          sort: this.sort,
          order: this.order,
          limit: this.limit
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
