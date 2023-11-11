import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../_models/todo.model';
import { toggleTodo, editTodo, deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo | undefined;
  @ViewChild('textInputReference') inputTextElement:ElementRef | undefined;
  checked:FormControl = new FormControl(false);
  inputText:FormControl = new FormControl('');
  editMode:boolean = false;
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.checked.setValue(this.todo?.completed);
    this.inputText.setValue(this.todo?.title);
    this.checked.valueChanges.subscribe((value)=>{
      if(this.todo?.id)
        this.store.dispatch(toggleTodo({id:this.todo?.id}));
    });
  }
  setEditMode(){
    this.editMode = true;
    setTimeout(() => {
      this.inputTextElement?.nativeElement.select();
    }, 1);
  }
  onBlurTodo(){
    this.editMode = false;
    if(this.todo?.id){
      this.inputText.valid && this.inputText.value !== this.todo?.title ? this.store.dispatch(editTodo({id:this.todo?.id, text:this.inputText.value})) : null ; 
    }
  }
  delete(){
    if(this.todo?.id){
      this.store.dispatch(deleteTodo({
        id:this.todo?.id
      }));
    }
  }
}
