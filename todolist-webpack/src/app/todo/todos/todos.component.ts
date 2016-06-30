import { Component, Input } from '@angular/core';

import { Todo } from '../common/models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoTypePipe } from '../common/filters/todo-type.pipe';

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

    var index = this.todos.findIndex(function (todo) {
      return todo.id === removedTodo.id;
    })

    this.todos.splice(index, 1);

  }

  trackByTodo(index: number, todo: Todo) {
    return todo.id;
  }

}
