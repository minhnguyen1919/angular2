import { Component } from '@angular/core';
import { UnlessDirective } from './unless.directive';

@Component({
  selector: 'unless-directive',
  template: `
    <p>Unless Directive</p>
    <p *unless="condition">
      condition is false and myUnless is true.
    </p>

    <p *unless="!condition">
      condition is true and myUnless is false.
    </p>
  `,
  directives: [UnlessDirective]
})

export class UnlessComponent {
  private condition: boolean = true;
}
