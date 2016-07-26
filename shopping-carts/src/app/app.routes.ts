import { provideRouter, RouterConfig } from '@angular/router';

import { ProductRoutes } from './product';
import { HomeRoutes } from './home';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)

];
