import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'attribute-directive',
  template: `
    <h1>My First Attribute Directive</h1>
    <div>
      <input type="radio" name="colors" (click)="color='red'" checked/>Red
      <input type="radio" name="colors" (click)="color='green'"/>Green
      <input type="radio" name="colors" (click)="color='yellow'"/>Yellow
    </div>
    <p [myHighlight]="color" [defaultColor]="'Blue'">Highlight me!</p>
  `,
  directives: [HighlightDirective]
})

export class HighlightComponent {
  color: string = 'red';
}
