import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../models/todo';

@Pipe({
  name: 'leftTodo',
  pure: false
})

export class LeftTodoPipe implements PipeTransform {
  transform(todos: Todo[]): number {
    let total = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].isCompleted === false) {
        total++;
      }
    }

    return total;
  }
}
