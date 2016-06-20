import { Component } from '@angular/core';

import { HighlightDirective } from './directives/highlight-directive/highlight.directive';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Attribute Directive</h1>
    <p myHighlight>Highlight me!</p>
  `,
  directives: [HighlightDirective]
})

export class AppComponent { }
