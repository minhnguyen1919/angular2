import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProfileInfoComponent } from './profile-info';

@Component({
  // We don't need selector, bc we navigate to it from the outside, via the router.
  // selector: 'profile',
  template: require('./profile.component.jade'),
  directives: [
    ROUTER_DIRECTIVES,
    ProfileInfoComponent
  ]
})

export class ProfileComponent implements OnInit {

  constructor() {
    console.log('hello');
  }

  ngOnInit() {

  }


}
