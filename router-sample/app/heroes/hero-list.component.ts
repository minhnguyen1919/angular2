// TODO SOMEDAY: Feature Componetized like HeroCenter
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Hero, HeroService }   from './hero.service';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `

})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  private selectedId: number;
  private sub: any;

  constructor(
    private router: Router,
    private service: HeroService) { }

  ngOnInit() {
    this.service.getHeroes().then(heroes => this.heroes = heroes);
    this.sub = this.router
        .routerState
        .queryParams
        .subscribe(params => {
          this.selectedId = +params['id'];
          this.service.getHeroes()
            .then(heroes => this.heroes = heroes);
        });
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
