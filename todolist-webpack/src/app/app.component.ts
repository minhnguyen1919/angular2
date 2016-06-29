import { Component } from '@angular/core';

import '../../public/css/styles.css';

import { TodosComponent } from './todo/todos/todos.component';

@Component({
  selector: 'todo-app',
  template: require('./app.component.html'),
  directives: [
    TodosComponent
  ]
})

export class AppComponent {

}
