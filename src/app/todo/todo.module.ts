import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey } from './state';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';
import { reducer } from './state/todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
