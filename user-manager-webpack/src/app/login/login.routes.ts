import { RouterConfig } from '@angular/router';
import { AuthService, AuthGuard, LoginComponent } from './';

export const LoginRoutes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  }
]

export const AUTH_PROVIDERS = [AuthGuard, AuthService];
