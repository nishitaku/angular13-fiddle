import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducers, {
      metaReducers: fromTodo.metaReducers,
    }),
  ],
})
export class TodoModule {}
