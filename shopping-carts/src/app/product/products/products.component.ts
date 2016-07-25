import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Product, ProductService } from '../shared';

@Component({
  selector: 'products',
  template: require('./products.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ProductsComponent implements OnInit {

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
        // clear old data
        // this.users.length = 0;

        let type = params['type'] || null;
        console.log(type);
        this.getProduct({type: type});
      });


  }

  getProduct(params: any) {
    this.productService.getProducts(params)
      .subscribe(
        products => {
          this.products = products;
          console.log(this.products);
        },
        errors => {
          console.log(errors);
        }
      );
  }
}
