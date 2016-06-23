import { Component } from '@angular/core';

import { HighlightComponent } from './directives/highlight-directive/highlight.component';
import { StyleComponent } from './component-styles/component-style.component';

@Component({
  selector: 'my-app',
  template: `
    <attribute-directive></attribute-directive>
    <component-style></component-style>
  `,
  directives: [
    HighlightComponent,
    StyleComponent
  ]
})

export class AppComponent {


}
