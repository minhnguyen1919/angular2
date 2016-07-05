import { Component } from '@angular/core';

import '../../public/css/styles.css';

import {
  HeaderComponent,
  SidebarComponent,
  ContentComponent
} from './shared';

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
