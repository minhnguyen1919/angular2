import { UsersService } from './users.service';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';

describe('Message service', () => {

  beforeEachProviders( () => [HTTP_PROVIDERS, UsersService] );

  it('Should users data', injectAsync([UsersService], (usersService) => {
      return usersService
        .getUsers()
        .subscribe(
          users => {
            expect(users.length).toBeGreaterThan(0);
          });
    });
  );

});
