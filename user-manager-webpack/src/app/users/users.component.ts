import { Component } from '@angular/core';

@Component({
  // We don't need selector, bc we navigate to it from the outside, via the router.
  // selector: 'users',
  template: require('./users.component.jade')
})

export class UsersComponent {

}
