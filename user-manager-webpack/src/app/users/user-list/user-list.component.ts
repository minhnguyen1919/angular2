import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, UsersService } from '../shared';

@Component({
  selector: 'user-list',
  template: require('./user-list.component.jade')
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
