import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UsersService } from './shared';

import { DialogService } from '../shared';

@Component({
  // We don't need selector, bc we navigate to it from the outside, via the router.
  // selector: 'users',
  template: require('./users.component.jade'),
  providers: [
    UsersService,
    DialogService
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class UsersComponent {

}
