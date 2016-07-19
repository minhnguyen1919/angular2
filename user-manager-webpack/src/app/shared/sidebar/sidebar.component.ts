import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: 'side-bar',
  template: require('./sidebar.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class SidebarComponent {

}
