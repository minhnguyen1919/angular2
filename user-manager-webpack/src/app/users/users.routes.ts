import { RouterConfig } from '@angular/router';
import { UserListComponent } from './user-list';
import { NewUserComponent } from './new-user';
import { UserDetailComponent } from './user-detail';
import { UsersComponent } from './users.component';

import { CanDeactivateGuard } from '../interfaces';

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
        component: NewUserComponent
      },
      {
        path: ':id',
        component: UserDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
]
