import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesRoutes } from './heroes/heroes.routes';
import { CrisisesRoutes } from './crisis-center/crisis.routes';
import { LoginRoutes,
         AUTH_PROVIDERS }     from './login.routes';

import { CanDeactivateGuard } from './interfaces';


export const routes: RouterConfig = [
  ...CrisisesRoutes,
  ...HeroesRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];
