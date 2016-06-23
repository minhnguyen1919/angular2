import { Component } from '@angular/core';

import { HighlightComponent } from './directives/highlight-directive/highlight.component';

@Component({
  selector: 'my-app',
  template: `
    <attribute-directive></attribute-directive>
  `,
  directives: [
    HighlightComponent,
  ]
})

export class AppComponent {


}
