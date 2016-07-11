import { RouterConfig } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './profile-info';
import { UpdateProfileComponent } from './update-profile';

export const ProfileRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileInfoComponent,
      },
      {
        path: 'update',
        component: UpdateProfileComponent
      }
    ]
  }
];
