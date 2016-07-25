import { Component } from '@angular/core';
import './rxjs-operators';
import 'rxjs/Rx';

import '../../public/css/styles.scss';

import { ContentComponent, HeaderComponent } from './shared';

@Component({
  selector: 'main-shopping',
  template: require('./app.component.jade'),
  directives: [
    ContentComponent,
    HeaderComponent
  ]
})

export class AppComponent {
  constructor() {

  }
}
