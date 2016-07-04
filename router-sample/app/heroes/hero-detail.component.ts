import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  template: `

  `

})

export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {

  }

  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getHero(id).then(hero => this.hero = hero);
     });
  }

}
