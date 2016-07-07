import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from '@angular/forms';

import { User, UsersService } from '../shared';

@Component({
  selector: 'new-user',
  template: require('./new-user.component.jade'),
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES
  ]
})

export class NewUserComponent implements OnInit {
  user: User = new User();
  addUserForm: FormGroup;
  username: AbstractControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      'username': ['', Validators.required]
    });

    this.username = this.addUserForm.controls['username'];
  }

  ngOnInit() {

  }

  onSubmit(value:any) {
    console.log(value);
  }

  test() {
    console.log(this.username);
  }
}
