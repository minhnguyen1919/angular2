import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { APP_CONFIG, USER_DI_CONFIG } from './app/app.config';

import {
  AppComponent,
  APP_ROUTER_PROVIDERS
} from './app';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  { provide: APP_CONFIG, useValue: USER_DI_CONFIG }
]);
