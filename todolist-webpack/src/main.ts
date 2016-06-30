import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/todo/common/services/in-memory-data.service';

import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  {provide: XHRBackend, useClass: InMemoryBackendService},
  {provide: SEED_DATA, useClass: InMemoryDataService},
]);
