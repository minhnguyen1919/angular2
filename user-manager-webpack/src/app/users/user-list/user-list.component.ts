import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { User, UsersService } from '../shared';

@Component({
  selector: 'user-list',
  template: require('./user-list.component.jade'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class UserListComponent implements OnInit {

  private users: Array<User>;

  constructor(
    private usersService: UsersService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        errors => {
          console.log('error');
        }
      )
  }

}
