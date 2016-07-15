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
  profileForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      'username': [this.profile.username, Validators.required],
      'firstName': [this.profile.firstName],
      'lastName': [this.profile.lastName],
      'gender': [this.profile.gender],
      'email': [this.profile.email]
    })
  }

  onSubmit(data: any) {
    this.submitted = true;

    if (this.profileForm.valid) {
      _.merge(this.profile, data);
    }
  }
}

