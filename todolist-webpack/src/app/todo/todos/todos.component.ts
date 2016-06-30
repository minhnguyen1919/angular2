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
    // this.todos.push({
    //   id: '1',
    //   name: 'Todo 1',
    //   isCompleted: false
    // });

    // this.todos.push({
    //   id: '2',
    //   name: 'Todo 2',
    //   isCompleted: true
    // });

    this.todoService.getTodos()
      .then(todos => this.todos = todos);

    console.log(this.todos);
  }


}
