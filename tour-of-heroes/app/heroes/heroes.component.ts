import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/model/hero';
import { HeroService } from '../common/service/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: [
    'app/heroes/heroes.component.css'
  ],
  directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {

  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes: Hero[];

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
   this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
 }
}
