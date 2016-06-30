import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Todo } from '../models/todo';

@Injectable()

export class TodoService {

  private todosUrl = 'app/todos';

  constructor(
    private http: Http
  ) {

  }

  getTodos() {
    return this.http.get(this.todosUrl)
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
  }

  handleError() {
    console.log('Error');
  }
}
