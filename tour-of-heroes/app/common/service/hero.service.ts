import {Injectable} from '@angular/core';

import {HEROES} from '../constant/mock-heroes';

@Injectable()

export class HeroService {
  getHeroes () {
    return Promise.resolve(HEROES);
  }

  getHero (id: Number) {
    return this.getHeroes()
      .then(
        heroes =>
        heroes.filter(hero => hero.id === id)[0]);
  }

}
