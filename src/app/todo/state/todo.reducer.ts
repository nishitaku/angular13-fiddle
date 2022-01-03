import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as TodoActions from './todo.actions';

export const todoFeatureKey = 'todo';

export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

export const initialState: State = {
  loading: false,
  todos: [],
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadAll, (state) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadAllSuccess, (state, { todos }) => {
    return { ...state, loading: false, todos: [...state.todos, ...todos] };
  }),
  on(TodoActions.loadAllFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(TodoActions.load, (state) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadSuccess, (state, { todo }) => {
    return { ...state, loading: false, todos: [...state.todos, todo] };
  }),
  on(TodoActions.loadFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  })
);
