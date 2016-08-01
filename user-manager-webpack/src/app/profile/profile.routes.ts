import { RouterConfig } from '@angular/router';

import { ProfileComponent } from './profile.component';

export const ProfileRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
