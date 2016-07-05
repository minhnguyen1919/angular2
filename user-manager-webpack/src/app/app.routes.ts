import { provideRouter, RouterConfig } from '@angular/router';

import { UsersComponent } from './users';
import { ProfileComponent } from './profile';

export const routes: RouterConfig = [
  // {
  //   path: '',
  //   redirectTo: '/profile',
  //   pathMatch: 'full'
  // },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
