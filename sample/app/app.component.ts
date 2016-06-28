import { Component } from '@angular/core';

import { HighlightComponent } from './directives/highlight-directive/highlight.component';
import { UnlessComponent } from './directives/unless-directive/unless.component';
import { StyleComponent } from './component-styles/component-style.component';

import { OnchangeParentComponent } from './lifecycle/onchange/onchange-parent.component';
import { AfterViewComponent } from './lifecycle/afterview/after-view.component';
import { AfterContentParentComponent } from './lifecycle/aftercontent/after-content-parent.component';

import { DatePipeComponent } from './pipes/build-in/date-pipe.component';
import { DatePipe2Component } from './pipes/build-in/date-pipe-2.component';
import { PowerBoostCalculatorComponent } from './pipes/dev/power-booster.component';

import { WikiComponent } from './http/wiki/wikipedia.component';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template:
    // "<attribute-directive></attribute-directive>"
    // "<unless-directive></unless-directive>"

    // "<component-style></component-style>"

    // "<onchange-parent></onchange-parent>"
    // "<after-view></after-view>"
    // "<after-content-parent></after-content-parent>"

    // "<hero-birthday></hero-birthday>"
    // "<hero-birthday-2></hero-birthday-2>"

    // "<power-boost-calculator></power-boost-calculator>"
    "<my-wiki></my-wiki>"
  ,
  directives: [
    HighlightComponent,
    UnlessComponent,

    StyleComponent,

    OnchangeParentComponent,
    AfterViewComponent,
    AfterContentParentComponent,

    DatePipeComponent,
    DatePipe2Component,

    PowerBoostCalculatorComponent,

    WikiComponent
  ]
})

export class AppComponent {

}
