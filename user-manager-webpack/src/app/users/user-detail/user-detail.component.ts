import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { User, UsersService } from '../shared';

@Component({
  selector: 'user-detail',
  template: require('./user-detail.component.jade')
})

export class UserDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService) {

  }

  ngOnInit() {
    // Observable params
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.userService.getUser(id)
        .subscribe(
          user => this.user = user
        )
    })

    // Snapshot: the no-observable alternative
    // let id = this.route.snapshot.params['id'];
    // this.userService.getUser(id)
    //   .subscribe(
    //     user => this.user = user
    //   )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
