import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
}

export const USER_DI_CONFIG: AppConfig = {
  apiEndpoint: 'http://localhost:3000'
}

export let APP_CONFIG = new OpaqueToken('app.config');
