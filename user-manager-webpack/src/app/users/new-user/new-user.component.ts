import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormControl,
  FormGroup,
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
  addUserForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private formBuilder: FormBuilder) {

  }

  ageValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/[0-9]{2}/) || control.value < 18 || control.value > 120) {
      return {invalidAge: true};
    }

  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,63})+$/)) {
      return {invalidEmail: true};
    }
  }


  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')])],
      'address': [''],
      'email': ['', Validators.compose([Validators.required, this.emailValidator])],
      'age': ['', this.ageValidator]
    });
  }

  onSubmit(value:any) {
    console.log(value);
  }
}
