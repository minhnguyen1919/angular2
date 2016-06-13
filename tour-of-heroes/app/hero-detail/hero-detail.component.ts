import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero } from '../common/model/hero';
import { HeroService } from '../common/service/hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/hero-detail/hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  ngOnInit () {

    // + operator use to convert string to number
    let id = +this.routeParams.get('id');

    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) {

  }

  goBack() {
    window.history.back();
  }
}
