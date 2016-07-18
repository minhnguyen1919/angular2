import { RouterConfig } from '@angular/router';
import { UserListComponent } from './user-list';
import { NewUserComponent } from './new-user';
import { UserDetailComponent } from './user-detail';
import { UsersComponent } from './users.component';

import { CanDeactivateGuard } from '../interfaces';
import { AuthGuard } from '../login';

export const UsersRoutes: RouterConfig = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'new',
        component: NewUserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: UserDetailComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];
