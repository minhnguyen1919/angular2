import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../common/models/todo';

@Component({
  selector: 'todo-detail',
  template: require('./todo-detail.component.html')
})

export class TodoDetailComponent {

  @Input('todo') todo: Todo;

  @Output('deleteTodo') delete = new EventEmitter();

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }

}
