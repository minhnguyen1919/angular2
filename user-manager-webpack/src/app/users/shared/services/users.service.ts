import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';

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

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData);
  }

  getUser(id: string): Observable<User> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    return this.http.get(this.usersUrl, {search: params})
      .map(this.extractData);
  }
}
