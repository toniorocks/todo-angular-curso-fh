import { createReducer, on } from "@ngrx/store";
import { Todo } from "./_models/todo.model";
import * as actions from "./todo.actions";

export const initialState: Todo[] = [
    new Todo ('Vencer a Thanos'),
    new Todo ('Robar las gemas del infinito'),
    new Todo ('Usar las gemas del infinito para destruir a la mitad del universo')
];

const _todoReducer = createReducer(initialState,
    on(actions.addTodo, (state, { text }) => [...state, new Todo (text)]),
    on(actions.toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            } else {
                return todo;
            }
        });
    }),
    on(actions.editTodo, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: text
                };
            } else {
                return todo;
            }
        })
    }),
    on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(actions.toggleAll, (state, { completed }) => state.map(todo => {
        return {
            ...todo,
            completed: completed
        };
    })),
    on(actions.clearCompleted, (state) => state.filter(todo => !todo.completed))
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}