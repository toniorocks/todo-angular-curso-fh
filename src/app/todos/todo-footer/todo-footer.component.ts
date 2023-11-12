import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters, setFilter } from '../filters/filter.actions';
import { clearCompleted } from '../todo.actions';
import { Todo } from '../_models/todo.model';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilters = 'all';
  filters: validFilters[] = ['all', 'completed', 'pending'];
  pendings: number = 0;
  completed: number = 0;
  all: number = 0;
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    // this.store.select('filters').subscribe(filter => {
    //   this.currentFilter = filter;
    // })
    this.store.subscribe(state => {
      this.currentFilter = state.filters;
      this.countState(state.todos);
    });
  }
  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ term: filter }));
  }
  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
  protected countState(todos: Todo[]) {
    this.pendings = todos.filter(todo => !todo.completed).length;
    this.completed = todos.filter(todo => todo.completed).length;
    this.all = todos.length;
  }
}

// Compare this snippet from src/app/todos/todo-footer/todo-footer.component.html: