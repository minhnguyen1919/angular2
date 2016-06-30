import { Component, Input } from '@angular/core';

import { Todo } from '../common/models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';

@Component({
  selector: 'todos',
  template: require('./todos.component.html'),
  directives: [
    TodoDetailComponent
  ]
})

export class TodosComponent{
  @Input('todos') todos: Todo[];

  constructor () {

  }

  deleteTodo(removedTodo: Todo) {

    var index = this.todos.findIndex(function (todo) {
      return todo.id === removedTodo.id;
    })

    this.todos.splice(index, 1);

  }

}
