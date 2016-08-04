import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../shared';

@Component({
  selector: 'product-filter',
  template: require('./product-filter.component.jade')
})

export class ProductFilterComponent implements OnInit {

  types: string[];
  selectedType: string;
  madeIn: string[];
  selectedMadeIn: string;

  constructor(
    private productService: ProductService,
    private router: Router) {

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

  changeType(type: string) {
    this.selectedType = type;
  }

  changeMadeIn(country: string) {
    this.selectedMadeIn = country;
  }

  search() {
    let queryParams: any = {};

    if (this.selectedType) {
      queryParams.type = this.selectedType;
    }

    if (this.selectedMadeIn) {
      queryParams.made_in = this.selectedMadeIn;
    }

    this.router.navigate(['products'], { queryParams: queryParams });
  }

}
