import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UsersService {
  private usersUrl = 'http://localhost:3000/users';

  constructor(
    private http: Http) {

  }

  extractData(res: Response) {
    return res.json();
  }

  handleError(error: any) {
    console.log(error);
  }

  getUsers(): Observable<any[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData);
  }
}
