import { Component, Input, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core'

import { LoggerService } from '../../common/services/logger.service';
import { ChildViewComponent } from './child-view.component';

@Component({
  selector: 'after-view',
  template: `
    <div>-- child view begins --</div>
      <child-view></child-view>
    <div>-- child view ends --</div>
  `,
  directives: [
    ChildViewComponent
  ],
  providers: [
    LoggerService
  ]
})

export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  private prevHero = '';
  private comment:string = 'That\'s a long name';

  constructor (
      private logger: LoggerService
    ) {

  }

  // Query for a VIEW child of type `ChildViewComponent`
  // Will see hero and unuseData in ChildViewComponent
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      console.log('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

}

