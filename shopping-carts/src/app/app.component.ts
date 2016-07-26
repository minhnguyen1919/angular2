import { Component } from '@angular/core';
import './rxjs-operators';
import 'rxjs/Rx';

import '../../public/css/styles.scss';

import { ContentComponent, HeaderComponent } from './shared';

import { ProductService } from './product';

@Component({
  selector: 'main-shopping',
  template: require('./app.component.jade'),
  directives: [
    ContentComponent,
    HeaderComponent
  ],
  providers: [
    ProductService
  ]
})

export class AppComponent {
  constructor() {
  }
}
