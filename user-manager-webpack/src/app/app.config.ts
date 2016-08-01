import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
}

export const USER_DI_CONFIG: AppConfig = {
  apiEndpoint: 'http://172.16.126.34:3000'
};

export let APP_CONFIG = new OpaqueToken('app.config');
