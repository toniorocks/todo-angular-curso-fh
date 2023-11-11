import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  completed:boolean = false;
  constructor(private store:Store<AppState>) { }
  toggleAll(){
    console.log('toggleAll');
    const completed = !this.completed; this.completed = completed;
    this.store.dispatch(toggleAll({completed:completed}));
  }
}
