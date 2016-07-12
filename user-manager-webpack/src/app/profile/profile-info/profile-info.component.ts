import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Profile } from '../shared';
import { UpdateProfileComponent } from '../update-profile';

@Component({
  selector: 'profile-info',
  template: require('./profile-info.component.jade'),
  directives: [
    ROUTER_DIRECTIVES,
    UpdateProfileComponent
  ]
})

export class ProfileInfoComponent implements OnInit {
  profile: Profile;

  constructor() {

  }

  ngOnInit() {
    this.profile = {
      username: 'minhnguyen1919',
      firstName: 'Minh',
      lastName: 'Nguyen',
      dateOfBirth: '16-11-1990',
      gender: 'male',
      email: 'minh.nguyen@asnet.com.vn'
    }
  }

}
