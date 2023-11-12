import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from './filters/filter.actions';
import { Todo } from './_models/todo.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filters:validFilters): Todo[] {
    switch (filters) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
