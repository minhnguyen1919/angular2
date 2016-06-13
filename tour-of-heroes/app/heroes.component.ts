import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [
    'app/heroes.component.css'
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
