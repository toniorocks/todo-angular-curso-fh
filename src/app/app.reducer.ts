import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./todos/filters/filter.actions";
import { filterReducer } from "./todos/filters/filter.reducer";
import { todoReducer } from "./todos/todo.reducer";
import { Todo } from "./todos/_models/todo.model";

export interface AppState {
    todos: Todo[];
    filters: validFilters;
}

export const appReducers:ActionReducerMap<AppState> = {
    todos: todoReducer,
    filters: filterReducer
}