import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Profile } from '../shared';
import { UpdateProfileComponent } from '../update-profile';

import { AuthService } from '../../login';

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
  isShowUpdate: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) {

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

  updateProfile() {
    if (this.authService.isLoggedIn) {
      this.isShowUpdate = true;
      return;
    }

    this.router.navigate(['/login']);
  }

}
