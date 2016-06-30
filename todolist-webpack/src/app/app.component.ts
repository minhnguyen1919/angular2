import { Component, OnInit } from '@angular/core';

import '../../public/css/styles.css';

import { TodosComponent } from './todo/todos/todos.component';
import { TodoService } from './todo/common/services/todo.service';
import { Todo } from './todo/common/models/todo';

@Component({
  selector: 'todo-app',
  template: require('./app.component.html'),
  directives: [
    TodosComponent
  ],
  providers: [
    TodoService
  ]
})

export class AppComponent implements OnInit {
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

}
