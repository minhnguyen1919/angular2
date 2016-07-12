import { Component, Input } from '@angular/core';

import { Profile } from '../shared';

@Component({
  selector: 'update-profile',
  template: require('./update-profile.component.jade')
})

export class UpdateProfileComponent {
  @Input('profile') profile: Profile;

}
