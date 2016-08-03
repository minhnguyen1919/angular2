import { RouterConfig } from '@angular/router';

import { ProductListFullComponent } from './product-list-full';
import { ProductDetailComponent } from './product-detail';
import { ProductComponent } from './product.component';

export const ProductRoutes: RouterConfig = [

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListFullComponent
      },
      {
        path: ':name',
        component: ProductDetailComponent
      }
    ]
  }
];
