import { Component } from '@angular/core';
import './rxjs-operators';
import 'rxjs/Rx';

import './assets';
import { ContentComponent, HeaderComponent, FooterComponent } from './shared';
import { ProductService } from './product';

@Component({
  selector: 'main-shopping',
  template: require('./app.component.jade'),
  directives: [
    ContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ProductService
  ]
})

export class AppComponent {
}
