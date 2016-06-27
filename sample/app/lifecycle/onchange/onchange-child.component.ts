import { Component, Input, OnChanges, DoCheck, SimpleChange } from '@angular/core'

let NAME = 'name';
let DESC = 'desc';

class Result {
  current: string;
  previous: string;
}

@Component({
  selector: 'onchange-child',
  template: `
    <p>NAME: Previous value: {{nameLog.previous}} - Current value: {{nameLog.current}}</p>
    <p>DESC: Previous value: {{descLog.previous}} - Current value: {{descLog.current}}</p>
  `
})

export class OnchangeChildComponent implements OnChanges, DoCheck{

  @Input(NAME) name: string;
  @Input(DESC) desc: Object;

  oldDesc;

  constructor () {
    this.oldDesc = this.desc;
  }

  nameLog: Result;
  descLog: Result;

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log(name);
    for (let prop in changes) {
      if (prop === NAME) {
        this.nameLog = {
          current: changes[prop].currentValue,
          previous: changes[prop].previousValue
        };
      } else {
        this.descLog = {
          current: changes[prop].currentValue,
          previous: changes[prop].previousValue
        }
      }
    }
  }

  ngDoCheck() {
    console.log(this.desc);
    console.log(this.oldDesc);
  }

}
