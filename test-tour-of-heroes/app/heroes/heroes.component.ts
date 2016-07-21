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

  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes: Hero[];
  addingHero: boolean = false;
  error: any;

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

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
   this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
 }

 addHero () {
   this.addingHero = true;
   this.selectedHero = null;
 }

 close (savedHero: Hero) {
   this.addingHero = false;
   if (savedHero) {
     this.getHeroes();
   }
 }

 delete (hero: Hero, event: any) {
   event.stopPropagation();
   this.heroService
     .delete(hero)
     .then(res => {
       this.heroes = this.heroes.filter(h => h !== hero);
       if (this.selectedHero === hero) {
         this.selectedHero = null;
       }
     })
     .catch(error => this.error = error);
 }

 trackByHero (index: number, hero: Hero) {
   return hero.id;
 }
}
