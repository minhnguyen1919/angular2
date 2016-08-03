import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../shared';

@Component({
  selector: 'product-filter',
  template: require('./product-filter.component.jade')
})

export class ProductFilterComponent implements OnInit {

  types: string[];
  madeIn: string[];

  constructor(
    private productService: ProductService) {

  }

  ngOnInit() {
    Observable.forkJoin(
      this.productService.getProductMadeIn(),
      this.productService.getProductType()
      ).subscribe(
        data => {
          this.madeIn = data[0];
          this.types = data[1];
          console.log(data);
        }
      );
  }

}
