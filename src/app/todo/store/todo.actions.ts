import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadAll = createAction(
  '[Todo Page] Load All',
  props<{ offset?: number; limit?: number }>()
);

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  props<{ todos: Todo[] }>()
);

export const loadAllFailure = createAction(
  '[Todo API] Load All Failure',
  props<{ error: any }>()
);

export const load = createAction('[Todo Page] Load', props<{ id: number }>());

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ todo: Todo }>()
);

export const loadFailure = createAction(
  '[Todo API] Load Failure',
  props<{ error: any }>()
);
