import { Component } from '@angular/core';

import '../../public/css/styles.scss';

@Component({
  selector: 'main-shopping',
  template: require('./app.component.jade')
})

export class AppComponent {
  constructor() {
    console.log('asdasd');
  }
}
