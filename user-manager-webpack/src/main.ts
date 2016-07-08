import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { provideForms } from '@angular/forms';

import { APP_CONFIG, USER_DI_CONFIG } from './app/app.config';

import {
  AppComponent,
  APP_ROUTER_PROVIDERS
} from './app';

import { MessagesService } from './app/shared';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  provideForms(),
  { provide: APP_CONFIG, useValue: USER_DI_CONFIG },
  MessagesService
]);
