import { RouterConfig }          from '@angular/router';
import { CrisisListComponent }     from './crisis-list.component';
import { CrisisDetailComponent }   from './crisis-detail.component';

export const CrisisesRoutes: RouterConfig = [
  { path: 'crisises',  component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisDetailComponent }
];
