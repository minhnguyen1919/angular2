import { Component } from '@angular/core';

import { HighlightComponent } from './directives/highlight-directive/highlight.component';
import { UnlessComponent } from './directives/unless-directive/unless.component';
import { StyleComponent } from './component-styles/component-style.component';
import { OnchangeParentComponent } from './lifecycle/onchange/onchange-parent.component';
import { AfterViewComponent } from './lifecycle/afterview/after-view.component';
import { AfterContentParentComponent } from './lifecycle/aftercontent/after-content-parent.component';

@Component({
  selector: 'my-app',
  template:
    // "<attribute-directive></attribute-directive>"
    // "<unless-directive></unless-directive>"
    // "<component-style></component-style>"
    // "<onchange-parent></onchange-parent>"
    // "<after-view></after-view>"
    "<after-content-parent></after-content-parent>"
  ,
  directives: [
    HighlightComponent,
    UnlessComponent,
    StyleComponent,
    OnchangeParentComponent,
    AfterViewComponent,
    AfterContentParentComponent
  ]
})

export class AppComponent {

}
