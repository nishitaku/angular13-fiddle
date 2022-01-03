import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';

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

export const reducer = createReducer(initialState);
