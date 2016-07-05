import { provideRouter, RouterConfig } from '@angular/router';

import { UsersRoutes } from './users';
import { ProfileComponent } from './profile';

export const routes: RouterConfig = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  ...UsersRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
