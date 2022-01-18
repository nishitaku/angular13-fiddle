import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoModule } from '../todo.module';
import * as TodoSelectors from './todo.selectors';
import * as TodoActions from './todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));

  constructor(private store: Store) {}

  loadAll(offset?: number, limit?: number) {
    this.store.dispatch(TodoActions.loadAll({ offset, limit }));
  }

  load(id: number) {
    this.store.dispatch(TodoActions.load({ id }));
  }
}
