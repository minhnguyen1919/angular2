import { Pipe, PipeTransform } from '@angular/core'

import { Todo } from '../models/todo';

@Pipe({
  name: 'todoType',
  pure: false
})

export class TodoTypePipe implements PipeTransform {
  transform(todos: Todo[], type: string) {
    switch(type) {
      case 'all':
        return todos;

      case 'active':
        return todos.filter(function (todo) {
          return todo.isCompleted === false;
        });

      case 'completed':
        return todos.filter(function (todo) {
          return todo.isCompleted === true;
        });
    }
  }
}
