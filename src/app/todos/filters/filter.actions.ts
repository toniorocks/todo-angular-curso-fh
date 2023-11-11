import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Filter Component] Set Filter', 
props<{term:validFilters}>()); // This is the action creator function