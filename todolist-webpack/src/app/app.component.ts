import { Component, OnInit, DoCheck } from '@angular/core';

import '../../public/css/styles.css';

import { TodosComponent } from './todo/todos/todos.component';
import { TodoService } from './todo/common/services/todo.service';
import { Todo } from './todo/common/models/todo';
import { LeftTodoPipe } from './todo/common/filters/left-todo.pipe';
import { UUIDService } from './todo/common/services/uuid.service';

import * as _ from 'lodash';

@Component({
  selector: 'todo-app',
  template: require('./app.component.html'),
  directives: [
    TodosComponent
  ],
  providers: [
    TodoService,
    UUIDService
  ],
  pipes: [
    LeftTodoPipe
  ]
})

export class AppComponent implements OnInit, DoCheck {
  todos: Todo[] = [];
  newTodo: string = '';
  toggle: boolean = false;
  filter: string = 'all';

  constructor (
    private todoService: TodoService,
    private uuidService: UUIDService
  ) {

  }

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);

    console.log(this.todos);
  }

  ngDoCheck() {
    let check = _.some(this.todos, {isCompleted: false});
    this.toggle = !check;
  }

  addTodo(event: any) {

    if (event.keyCode === 13) {
      this.todos.push({
        id: this.uuidService.generate(),
        name: this.newTodo,
        isCompleted: false,
        isEditting: false
      });

      this.newTodo = '';
      this.toggle = false;
    }

  }

  clearCompletedTodo() {
    _.remove(this.todos, function(todo) {
      return todo.isCompleted === true;
    })
  }

  toggleTodos() {
    this.toggle = !this.toggle;

    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].isCompleted = this.toggle;
    }
  }

}
