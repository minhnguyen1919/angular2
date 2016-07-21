import { Component, OnInit } from '@angular/core';

import { Hero } from '../common/model/hero';
import { HeroService } from '../common/service/hero.service';

import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];

  ngOnInit() {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes.slice(1, 5)
    );
  }

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {

  }

  gotoDetail (hero: Hero) {
    let link = [
      'HeroDetail',
      {
        id: hero.id
      }
    ];

    this.router.navigate(link);
  }

}
