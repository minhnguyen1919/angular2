import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../common/models/todo';

@Component({
  selector: 'todo-detail',
  template: require('./todo-detail.component.html')
})

export class TodoDetailComponent {

  @Input('todo') todo: Todo;

  @Output('deleteTodo') delete = new EventEmitter();

  private backupTodo: Todo;

  edit() {
    this.backupTodo = Object.assign({}, this.todo);
    // this.backupTodo = this.todo;
    this.todo.isEditting = true;
  }

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }

  saveTodo(event: any) {

    switch(event.keyCode) {
      case 13:
        this.todo.isEditting = false;
        break;

      case 27:
        this.todo.name = this.backupTodo.name;
        this.todo.isEditting = false;
        break;
    }
  }

}
