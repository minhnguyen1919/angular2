import { RouterConfig } from '@angular/router';

import { ProductsComponent } from './products';
import { ProductDetailComponent } from './product-detail';
import { ProductComponent } from './product.component';

export const ProductRoutes: RouterConfig = [

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':name',
        component: ProductDetailComponent
      }
    ]
  }
];
