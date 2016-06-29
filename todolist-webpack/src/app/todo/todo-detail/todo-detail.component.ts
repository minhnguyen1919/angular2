import { Component, Input } from '@angular/core';

import { Todo } from '../common/models/todo';

@Component({
  selector: 'todo-detail',
  template: require('./todo-detail.component.html')
})

export class TodoDetailComponent {

  @Input('todo') todo: Todo;

}
