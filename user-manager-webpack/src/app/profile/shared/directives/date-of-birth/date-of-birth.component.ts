import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'date-of-birth',
  template: require('./date-of-birth.component.jade'),
  styles: [
    require('./date-of-birth.component.css')
  ]
})

export class DateOfBirthComponent implements OnInit {
  @Input('dateOfBirth') dateOfBirth: any;
  @Output() dateChanged = new EventEmitter;

  birthDate: any;

  error: any = {
    isValidDate: true,
    isValidAge: true
  };

  constructor() {

  }

  ngOnInit() {
    this.birthDate = {
      date: this.dateOfBirth.substring(0, 2),
      month: this.dateOfBirth.substring(3, 5),
      year: this.dateOfBirth.substring(6, 11)
    }
  }

  checkAge() {

    // re-create date of birth string from date that user select
    this.dateOfBirth = `${this.birthDate.date}-${this.birthDate.month}-${this.birthDate.year}`;

    var momentDate = moment(this.dateOfBirth, 'DD-MM-YYYY');

    // check date valid
    this.error.isValidDate = momentDate.isValid();

    // emit event to component that use this directive to update data and error status
    this.dateChanged.emit({
      dateOfBirth: this.dateOfBirth,
      isValid: momentDate.isValid()
    });

    console.log('change date');
  }

  /**
    * generate list integer number from {begin} to {end}
    */
  generateNumberList(begin: number, end: number, isRevert: boolean) {
    var result: Array<string> = [];

    for(let i = begin; i <= end; i++) {
      result.push((i.toString().length === 1 ? '0' : '') + i.toString());
    }

    return isRevert? result.reverse(): result;
  }
}
