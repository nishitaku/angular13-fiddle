import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey } from './store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { reducer } from './store/todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
