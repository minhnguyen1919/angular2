import { Component } from '@angular/core';

import { HighlightComponent } from './directives/highlight-directive/highlight.component';
import { UnlessComponent } from './directives/unless-directive/unless.component';
import { StyleComponent } from './component-styles/component-style.component';

@Component({
  selector: 'my-app',
  template: `
    <attribute-directive></attribute-directive>
    <unless-directive></unless-directive>
    <component-style></component-style>
  `,
  directives: [
    HighlightComponent,
    UnlessComponent,
    StyleComponent
  ]
})

export class AppComponent {

}
