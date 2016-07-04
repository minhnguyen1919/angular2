import { provideRouter, RouterConfig } from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
import { HeroesRoutes } from './heroes/heroes.routes';

export const routes: RouterConfig = [
  { path: 'crisis-center', component: CrisisListComponent },
  ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
