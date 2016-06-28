import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday-2',
  template: `
    <p>The hero's birthday is {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
  `

})
export class DatePipe2Component {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
