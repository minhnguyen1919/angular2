import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService) {

  }

  ngOnInit() {

  }

  onSubmit() {

  }
}
