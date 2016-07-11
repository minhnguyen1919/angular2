import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'profile-info',
  template: require('./profile-info.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ProfileInfoComponent {

}
