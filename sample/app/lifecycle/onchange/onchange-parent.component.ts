import { Component } from '@angular/core'

import { OnchangeChildComponent } from './onchange-child.component';

@Component({
  selector: 'onchange-parent',
  template: `
    Name---------<input type="text" [(ngModel)]=name/>
    <br/>
    Description--<input type="text" [(ngModel)]=description.desc/>
    <br/>
    Age-----------<input type="text" [(ngModel)]=age/>
    <br/>
    <a href="javascript: void(0);" (click)="description='hello'">Change</a>
    <onchange-child [name]="name" [desc]="description"></onchange-child>
  `,
  directives: [
    OnchangeChildComponent,
  ]
})

export class OnchangeParentComponent {
  name: string = 'Minh';
  description = {
    id: 1,
    desc: 'Developer'
  }
  age: number = 27;
}
