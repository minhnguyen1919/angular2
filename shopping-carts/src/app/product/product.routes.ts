import { RouterConfig } from '@angular/router';

import { ProductsComponent } from './products';
import { ProductComponent } from './product.component';

export const ProductRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'product'
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: ProductsComponent
      }
    ]
  }
];
