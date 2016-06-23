import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-style',
  template: `
    <h1>Hello</h1>
    <h2 class="active">World</h2>
  `,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Native,
  encapsulation: ViewEncapsulation.Emulated,
  styles: [
    '.active {color: red};'
  ]
})

export class StyleComponent {

}
