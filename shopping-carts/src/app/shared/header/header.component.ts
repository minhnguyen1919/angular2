import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-header',
  template: require('./header.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class HeaderComponent {

}
