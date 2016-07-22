import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { provideForms } from '@angular/forms';

import { APP_CONFIG, USER_DI_CONFIG } from './app/app.config';

import {
  AppComponent
} from './app';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  provideForms(),
  { provide: APP_CONFIG, useValue: USER_DI_CONFIG }
]);
