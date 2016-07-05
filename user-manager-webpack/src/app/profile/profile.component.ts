import { Component } from '@angular/core';

@Component({
  // We don't need selector, bc we navigate to it from the outside, via the router.
  // selector: 'profile',
  template: require('./profile.component.jade')
})

export class ProfileComponent {
  constructor() {
    console.log('hello');
  }
}
