import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http'
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
  JSONP_PROVIDERS
]);
