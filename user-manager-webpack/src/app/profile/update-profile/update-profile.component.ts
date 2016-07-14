import { Component, OnInit, Input } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Profile, DateOfBirthComponent } from '../shared';

import { FirstKeyPipe, MessagesService } from '../../shared';

import * as _ from 'lodash';

@Component({
  selector: 'update-profile',
  template: require('./update-profile.component.jade'),
  directives: [
    DateOfBirthComponent,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES
  ],
  pipes: [
    FirstKeyPipe
  ]
})

export class UpdateProfileComponent implements OnInit {
  @Input('profile') profile: Profile;
  editProfile: Profile;
  profileForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.editProfile = _.clone(this.profile);
    this.profileForm = this.formBuilder.group({
      'username': [this.editProfile.username, Validators.required],
      'firstName': [this.editProfile.firstName],
      'lastName': [this.editProfile.lastName],
      'gender': [this.editProfile.gender],
      'email': [this.editProfile.email]
    })
  }

  onSubmit(data: any) {
    this.submitted = true;

    console.log(this.profileForm.valid);
    console.log(data);
  }
}

