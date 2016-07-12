import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProfileInfoComponent } from './profile-info';
import { Profile } from './shared';

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

  profile: Profile;

  constructor() {
    console.log('hello');
  }

  ngOnInit() {
    this.profile = {
      username: 'minhnguyen1919',
      firstName: 'Minh',
      lastName: 'Nguyen',
      dateOfBirth: '16-05-1990',
      gender: 'male',
      email: 'minh.nguyen@asnet.com.vn'
    }
  }


}
