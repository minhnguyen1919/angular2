import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductService } from '../shared';
import { CommentComponent } from '../comment';
import { SidebarComponent } from '../sidebar';

@Component({
  selector: 'product-detail',
  template: require('./product-detail.component.jade'),
  directives: [
    CommentComponent,
    SidebarComponent
  ]
})

export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {
    let productName = this.route.snapshot.params['name'];

    this.productService.getProduct(productName)
      .subscribe(
        product => {
          this.product = product[0];
        }
      );


  }
}
