import { Component, OnInit } from '@angular/core';

import { Todo } from '../common/models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';

@Component({
  selector: 'todos',
  template: require('./todos.component.html'),
  directives: [
    TodoDetailComponent
  ]
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor () {

  }

  ngOnInit() {
    this.todos.push({
      id: '1',
      name: 'Todo 1',
      isCompleted: false
    });

    this.todos.push({
      id: '2',
      name: 'Todo 2',
      isCompleted: true
    });

    console.log(this.todos);
  }


}
