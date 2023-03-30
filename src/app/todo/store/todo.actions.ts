import { createAction, props } from '@ngrx/store';
import { PlaceholderTodo } from 'src/app/shared/services/placeholder/placeholder.service';
import { Todo } from '../models/todo.model';

export const loadAll = createAction(
  '[Todo Page] Load All',
  props<{ offset?: number; limit?: number }>()
);

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  props<{ todos: PlaceholderTodo[] }>()
);

export const loadAllFailure = createAction(
  '[Todo API] Load All Failure',
  props<{ error: any }>()
);

export const load = createAction('[Todo Page] Load', props<{ id: number }>());

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ todo: PlaceholderTodo }>()
);

export const loadFailure = createAction(
  '[Todo API] Load Failure',
  props<{ error: any }>()
);
