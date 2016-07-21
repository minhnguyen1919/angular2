// Imports for loading & configuring the in-memory web api
import { provide, OpaqueToken }    from '@angular/core';
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './common/service/in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }   from './app/app.component';

import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
  provide(SEED_DATA, { useClass: InMemoryDataService }),     // in-mem server data
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
]);
