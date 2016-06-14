import {Component} from '@angular/core';

@Component({
  selector: 'key-up-2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v2 {
  values = '';

  // with strong typing
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
