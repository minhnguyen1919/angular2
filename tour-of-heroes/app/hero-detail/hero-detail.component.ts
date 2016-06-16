import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero } from '../common/model/hero';
import { HeroService } from '../common/service/hero.service';
import { AppConfig, APP_CONFIG } from '../app.config';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/hero-detail/hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  ngOnInit () {

    if (this.routeParams.get('id') !== null) {

      // + operator use to convert string to number
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id)
          .then(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }

    console.log(this.config.title);
  }

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {

  }

  save () {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero;
        this.goBack(hero);
      })
      .catch(error => this.error = error)
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}
