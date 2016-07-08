import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/forms';

import { User, UsersService } from '../shared';
import { APP_CONSTANT } from '../../app.constant';

@Component({
  selector: 'user-detail',
  template: require('./user-detail.component.jade'),
  directives: [
    FORM_DIRECTIVES
  ]
})

export class UserDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onSubmit() {
    this.userService.save(this.user)
      .subscribe(
        user => {
          console.log(APP_CONSTANT.messages.user.edit.success);
          this.router.navigate(['/users']);
        }
      )
  }

  goBack() {
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
