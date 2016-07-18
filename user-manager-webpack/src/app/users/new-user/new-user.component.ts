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

// main shared
import {
  IndicatorComponent,
  FirstKeyPipe,
  MessagesService
} from '../../shared';

// user shared
import {
  UsersService
} from '../shared';

import { APP_CONSTANT } from '../../app.constant';

@Component({
  selector: 'new-user',
  template: require('./new-user.component.jade'),
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    IndicatorComponent
  ],
  pipes: [
    FirstKeyPipe
  ]
})

export class NewUserComponent implements OnInit {
  addUserForm: FormGroup;
  isLoading: boolean = false;
  submitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private messageService: MessagesService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // create FormGroup with many FormControl
    this.addUserForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')])],
      'address': [''],
      'email': ['', Validators.compose([Validators.required, this.emailValidator])],
      'age': ['', this.ageValidator]
    });


    // // watch control value change
    // this.addUserForm.controls['username'].valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('Username change to: ', value);
    //   }
    // );

    // // watch form value change
    // this.addUserForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('Form change to: ', form);
    //   }
    // );
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

  onSubmit(value: any) {
    this.submitted = true;

    if (!this.addUserForm.valid) {
      return;
    }

    if (!this.isLoading) {
      this.isLoading = true;

      this.userService.save(value)
        .subscribe(
          user => {
            console.log(APP_CONSTANT.messages.user.add.success);
            console.log(this.messageService.invalid('name'));
            this.isLoading = false;
            this.router.navigate(['/users']);
          },
          error => {
            console.log(APP_CONSTANT.messages.user.add.fail);
            this.isLoading = false;
          }
        );
    }

  }
}
