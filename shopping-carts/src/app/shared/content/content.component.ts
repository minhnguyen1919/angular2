import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-content',
  template: require('./content.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ContentComponent {

}
