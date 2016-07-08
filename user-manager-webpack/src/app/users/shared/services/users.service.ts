import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';
import { APP_CONFIG, AppConfig } from '../../../app.config';

let headers = new Headers({
  'Content-type': 'application/json'
});

@Injectable()

export class UsersService {
  private usersUrl: string;

  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.usersUrl = this.config.apiEndpoint + '/users';
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

  private post(user: User) {
    return this.http
               .post(this.usersUrl, JSON.stringify(user), {headers: headers})
               .map(this.extractData);
  }

  private put(user: User) {
    return this.http
               .put(`${this.usersUrl}/${user.id}`, JSON.stringify(user), {headers: headers})
               .map(this.extractData);

  }

  save(user: User) {
    if (user.id) {
      return this.put(user);
    }

    return this.post(user);
  }

  delete(user: User) {
    return this.http
               .delete(`${this.usersUrl}/${user.id}`, headers)
               .map(this.extractData);
  }
}
