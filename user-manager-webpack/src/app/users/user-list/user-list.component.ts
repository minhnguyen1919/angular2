import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';

// import { Observable } from 'rxjs/Observable';

import { User, UsersService, UserPipe } from '../shared';

import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'user-list',
  template: require('./user-list.component.jade'),
  directives: [
    ROUTER_DIRECTIVES,
    PaginationControlsCmp
  ],
  providers: [
    PaginationService
  ],
  pipes: [
    UserPipe,
    PaginatePipe
  ]
})

export class UserListComponent implements OnInit {

  private users: Array<User>;
  keyword: string = '';
  pagination: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router) {
  }

  ngOnInit() {
    this.initPaginationConfig();

    this.router
      .routerState
      .queryParams
      .subscribe(params => {
        // clear old data
        this.users = [];

        let page = +params['page'];
        this.pagination.currentPage = (page && page > 0 && page <= this.pagination.totalPages) ? page : 1;

        // get new data
        this.getUsers();

      });

  }

  initPaginationConfig() {
    this.pagination = {
      itemsPerPage: 10,
      currentPage: 1,
      totalPages: 5,
      maxSize: 3,
      // directionLinks [boolean] If set to false, the "previous" and "next" links
      // will not be displayed. Default is true.
      directionLinks: true,
      // autoHide [boolean] If set to true, the pagination controls will not be
      // displayed when all items in the collection fit onto the first page. Default is false.
      autoHide: false
    };
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
      );
  }

  pageChange(page: number) {
    this.router.navigate(['users'], {
      queryParams: {
        page: page
      }
    });

  }

  trackByUsers(index: number, user: User) {
    return user.id;
  }

}
