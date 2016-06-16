import { Component }       from '@angular/core';
import { HeroService } from '../common/service/hero.service';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { Logger } from '../common/service/logger.service';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app/app.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    // define HeroService in here to all app just create 1 instance of HeroService
    HeroService,
    ROUTER_PROVIDERS,
    Logger,
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
