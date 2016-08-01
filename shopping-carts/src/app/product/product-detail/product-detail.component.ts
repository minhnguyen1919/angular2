import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      let productName = params['name'];

      this.productService.getProduct(productName)
        .subscribe(
          product => {
            this.product = product[0];
          }
        );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
