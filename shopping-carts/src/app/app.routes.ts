import { provideRouter, RouterConfig } from '@angular/router';

import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanDeactivateGuard
];
