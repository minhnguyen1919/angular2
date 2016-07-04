import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent {

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {

  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}
