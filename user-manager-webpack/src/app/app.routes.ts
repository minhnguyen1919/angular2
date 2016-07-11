import { provideRouter, RouterConfig } from '@angular/router';

import { LoginRoutes, AUTH_PROVIDERS } from './login';
import { UsersRoutes } from './users';
import { ProfileRoutes } from './profile';

import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
  ...ProfileRoutes,
  ...UsersRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanDeactivateGuard,
  AUTH_PROVIDERS
];
