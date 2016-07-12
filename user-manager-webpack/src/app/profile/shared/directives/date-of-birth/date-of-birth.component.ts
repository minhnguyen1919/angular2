import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'date-of-birth',
  template: require('./date-of-birth.component.jade')
})

export class DateOfBirthComponent implements OnInit {
  @Input('dateOfBirth') dateOfBirth: any;

  birthDate: any;

  error: any = {
    isValid: true
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

  checkAge(newValue: any) {
    console.log(newValue);
    console.log(this.birthDate);
    var momentDate = moment(this.birthDate.date + this.birthDate.month + this.birthDate.year, 'DDMMYYYY');

    this.error.isValid = momentDate.isValid();
    console.log(this.error.isValid);
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
