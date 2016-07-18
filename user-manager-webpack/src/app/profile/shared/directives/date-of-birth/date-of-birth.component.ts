import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { FirstKeyPipe } from '../../../../shared';


import * as moment from 'moment';

@Component({
  selector: 'date-of-birth',
  template: require('./date-of-birth.component.jade'),
  styles: [
    require('./date-of-birth.component.css')
  ],
  pipes: [
    FirstKeyPipe
  ]
})

export class DateOfBirthComponent implements OnInit {
  @Input('dateOfBirth') dateOfBirth: any;
  @Input('form') form: FormGroup;
  @Input('submitted') submitted: boolean;

  dobControl: AbstractControl;

  birthDate: any;

  constructor() {

  }

  ngOnInit() {
    // create birthDate object from dateOfbirth string
    this.birthDate = {
      date: this.dateOfBirth.substring(0, 2),
      month: this.dateOfBirth.substring(3, 5),
      year: this.dateOfBirth.substring(6, 11)
    };

    // add dateOfBirth formControl to form
    this.form.addControl('dateOfBirth', new FormControl(this.dateOfBirth));

    this.dobControl = this.form.controls['dateOfBirth'];
  }

  /**
    * validate date of birth after user change select box
    * so error message if it is invalid
    */
  checkAge() {

    // re-create date of birth string from date that user select
    let dateOfBirth = `${this.birthDate.date}-${this.birthDate.month}-${this.birthDate.year}`;

    // update date of birth value
    (<FormControl>this.dobControl).updateValue(dateOfBirth);

    let momentDate = moment(dateOfBirth, 'DD-MM-YYYY');

    // check date valid
    this.dobControl.setErrors(momentDate.isValid() ? null : {'invalid': true});
  }

  /**
    * generate list integer number from {begin} to {end}
    */
  generateNumberList(begin: number, end: number, isRevert: boolean) {
    let result: Array<string> = [];

    for (let i = begin; i <= end; i++) {
      result.push((i.toString().length === 1 ? '0' : '') + i.toString());
    }

    return isRevert ? result.reverse() : result;
  }
}
