import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date:'fullDate' | uppercase }}</p>`
})
export class DatePipeComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
