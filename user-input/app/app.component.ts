import { Component } from '@angular/core';
import { ClickMeComponent } from './user-input/click-me.component';
import { KeyUpComponent_v1 } from './user-input/key-up-1.component';
import { LoopbackComponent } from './user-input/loop-back.component';
import { KeyUpComponent_v2 } from './user-input/key-up-2.component';
import { KeyUpComponent_v3 } from './user-input/key-up-3.component';
import { LittleTourComponent } from './user-input/little-tour.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <h2>Click Me</h2>
    <click-me></click-me>
    <br/>
    <h2>Key up v1</h2>
    <key-up-1></key-up-1>
    <br/>
    <h2>Loop back</h2>
    <loop-back></loop-back>
    <h2>Key up v2</h2>
    <key-up-2></key-up-2>
    <h2>Key up v3</h2>
    <key-up-3></key-up-3>
    <h2>Little tour</h2>
    <little-tour></little-tour>
  `,
  directives: [
    ClickMeComponent,
    KeyUpComponent_v1,
    LoopbackComponent,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    LittleTourComponent,
  ]
})

export class AppComponent { }
