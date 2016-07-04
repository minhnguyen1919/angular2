import { Component } from '@angular/core';

import '../../public/css/styles.scss';

import {
  HeaderComponent,
  SidebarComponent
} from './shared';

import {
  ContentComponent
} from './content';

@Component({
  selector: 'user-manager',
  template: require('./app.component.jade'),
  directives: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ]
})

export class AppComponent {

}
