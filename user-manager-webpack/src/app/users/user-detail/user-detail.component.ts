import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { DialogService } from '../../shared';
import { User, UsersService } from '../shared';
import { APP_CONSTANT } from '../../app.constant';

import * as _ from 'lodash';

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
  originalUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private dialogService: DialogService) {
  }

  ngOnInit() {
    // Observable params
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.userService.getUser(id)
        .subscribe(
          user => {
            this.user = user;
            this.originalUser = _.clone(user);
          }
        );
    });

    // Snapshot: the no-observable alternative
    // let id = this.route.snapshot.params['id'];
    // this.userService.getUser(id)
    //   .subscribe(
    //     user => this.user = user
    //   )
  }

  onSubmit() {
    this.originalUser = _.clone(this.user);

    this.userService.save(this.user)
      .subscribe(
        user => {
          console.log(APP_CONSTANT.messages.user.edit.success);
          this.router.navigate(['/users']);
        }
      );
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (_.isEqual(this.originalUser, this.user)) {
      return true;
    }

    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);

    return o;
  }

  cancel() {
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
