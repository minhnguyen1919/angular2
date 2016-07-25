import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from '../shared';

@Component({
  selector: 'products',
  template: require('./products.component.jade')
})

export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService
    ) {

  }

  ngOnInit() {
    this.productService.getProduct()
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
