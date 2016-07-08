import { provideRouter, RouterConfig } from '@angular/router';

import { UsersRoutes } from './users';
import { ProfileComponent } from './profile';

export const routes: RouterConfig = [
  {
    path: '',
    component: ProfileComponent
  },
  ...UsersRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
