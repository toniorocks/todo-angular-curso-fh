import { createReducer, on } from "@ngrx/store";
import { setFilter, validFilters } from "./filter.actions";

export const initialState: validFilters = 'all';

const _filterReducer = createReducer<validFilters>(initialState,
    on(setFilter, (state, { term }) => term),
);

export function filterReducer(state:any, action:any) {
    return _filterReducer(state, action);
  }

