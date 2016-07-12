import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'date-of-birth',
  template: require('./date-of-birth.component.jade')
})

export class DateOfBirthComponent implements OnInit {
  @Input('dateOfBirth') dateOfBirth: any;

  birthDate: Object;

  constructor() {

  }

  ngOnInit() {
    this.birthDate = {
      date: this.dateOfBirth.substring(0, 2),
      month: this.dateOfBirth.substring(3, 5),
      year: this.dateOfBirth.substring(6, 11)
    }
  }

  /**
    * generate list integer number from {begin} to {end}
    */
  generateNumberList(begin: number, end: number, isRevert: boolean) {
    var result: Array<number> = [];

    for(let i = begin; i <= end; i++) {
      result.push(i);
    }

    return isRevert? result.reverse(): result;
  }
}
