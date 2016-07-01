import { Component, Input } from '@angular/core';

import { Todo } from '../common/models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoTypePipe } from '../common/filters/todo-type.pipe';

import * as _ from 'lodash';

@Component({
  selector: 'todos',
  template: require('./todos.component.html'),
  directives: [
    TodoDetailComponent
  ],
  pipes: [
    TodoTypePipe
  ]
})

export class TodosComponent{
  @Input('todos') todos: Todo[];
  @Input('filter') filter: string;

  constructor () {

  }

  deleteTodo(removedTodo: Todo) {

    _.remove(this.todos, function (todo) {
      return todo.id === removedTodo.id;
    });

  }

  trackByTodo(index: number, todo: Todo) {
    return todo.id;
  }

}
