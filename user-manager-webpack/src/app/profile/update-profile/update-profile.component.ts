import { Component, Input } from '@angular/core';

import { Profile, DateOfBirthComponent } from '../shared';

@Component({
  selector: 'update-profile',
  template: require('./update-profile.component.jade'),
  directives: [
    DateOfBirthComponent
  ]
})

export class UpdateProfileComponent {
  @Input('profile') profile: Profile;

  constructor() {
  }
}
