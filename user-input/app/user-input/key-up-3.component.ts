import {Component} from '@angular/core';

@Component({
  selector: 'key-up-3',
  template: `
    <input #box (keyup.enter)="values=box.value" (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values = '';
}
