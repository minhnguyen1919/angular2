import { Component, Input } from '@angular/core'

@Component({
  selector: 'child-view',
  template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
  hero = 'Magneta';
  unuseData = 'Bye Bye';
  private privateData = 'hiding data';

  logIt() {
    console.log(this.unuseData);
  }
}
