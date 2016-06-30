import { Component, OnInit } from '@angular/core';

import { Todo } from '../common/models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';

import { TodoService } from '../common/services/todo.service';

@Component({
  selector: 'todos',
  template: require('./todos.component.html'),
  directives: [
    TodoDetailComponent
  ],
  providers: [
    TodoService
  ]
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor (
    private todoService: TodoService
  ) {

  }

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);

    console.log(this.todos);
  }

  deleteTodo(removedTodo: Todo) {

    var index = this.todos.findIndex(function (todo) {
      return todo.id === removedTodo.id;
    })

    this.todos.splice(index, 1);

  }

}
