import { provideRouter, RouterConfig } from '@angular/router';

import { ProductComponent, ProductRoutes } from './product';

const routes: RouterConfig = [
  ...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)

];
