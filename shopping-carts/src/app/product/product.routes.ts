import { RouterConfig } from '@angular/router';

import { ProductListComponent } from './product-list';
import { ProductDetailComponent } from './product-detail';
import { ProductComponent } from './product.component';

export const ProductRoutes: RouterConfig = [

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':name',
        component: ProductDetailComponent
      }
    ]
  }
];
