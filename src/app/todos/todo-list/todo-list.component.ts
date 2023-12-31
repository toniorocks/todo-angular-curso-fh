import { Component, OnInit } from '@angular/core';
import  { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from '../filters/filter.actions';
import { Todo } from '../_models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: validFilters = 'all';

  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    //this.store.select('todos').subscribe(todos => this.todos = todos);
    //throw new Error('Method not implemented.');
    this.store.subscribe(({ todos, filters }) => {
      this.todos = todos;
      this.currentFilter = filters;
    });
  }

}
