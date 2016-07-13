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
      'username': ['', Validators.required],
      'firstName': [''],
      'lastName': [''],
      'gender': [''],
      'dateOfBirth': [''],
      'email': ['']
    })
  }

  onSubmit() {
    this.submitted = true;
  }
}

