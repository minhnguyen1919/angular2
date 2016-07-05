import { RouterConfig } from '@angular/router';
import { UserListComponent } from './user-list';
import { UserDetailComponent } from './user-detail';
import { UsersComponent } from './users.component';

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
        path: ':id',
        component: UserDetailComponent
      }
    ]
  }
]
