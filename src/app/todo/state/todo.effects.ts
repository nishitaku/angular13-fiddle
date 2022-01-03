import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo/todo.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAll),
      switchMap(({ offset, limit }) =>
        this.todoService.findAll(offset, limit).pipe(
          map((result) => TodoActions.loadAllSuccess({ todos: result })),
          catchError((error) => of(TodoActions.loadAllFailure({ error })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.load),
      switchMap(({ id }) =>
        this.todoService.find(id).pipe(
          map((result) => TodoActions.loadSuccess({ todo: result })),
          catchError((error) => of(TodoActions.loadFailure({ error })))
        )
      )
    )
  );
}
