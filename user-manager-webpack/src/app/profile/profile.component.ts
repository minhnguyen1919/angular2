import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  // We don't need selector, bc we navigate to it from the outside, via the router.
  // selector: 'profile',
  template: require('./profile.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class ProfileComponent {

  constructor() {
    console.log('hello');
  }
}
