import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

import { User } from '../models';

@Pipe({
  name: 'userFilter',
  pure: true
})

export class UserPipe implements PipeTransform {

  transform(users: User[], keyword: string) {
    return _.filter(users, function (user) {
      return user.username.includes(keyword);
    });

  }
}
