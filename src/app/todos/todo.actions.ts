import { createAction, props } from "@ngrx/store";

export const addTodo = createAction('[Todo Component] Add Todo', props<{text:string}>()); // This is the action creator function
export const toggleTodo = createAction('[Todo Component] Toggle Todo', props<{id:number}>()); // This is the action creator function
export const editTodo = createAction('[Todo Component] Edit Todo', props<{id:number, text:string}>()); // This is the action creator function
export const deleteTodo = createAction('[Todo Component] Delete Todo', props<{id:number}>()); // This is the action creator function
export const toggleAll = createAction('[Todo Component] Toggle All Todo', props<{completed:boolean}>()); // This is the action creator function
export const clearCompleted = createAction('[Todo Component] Clear Completed Todo'); // This is the action creator function