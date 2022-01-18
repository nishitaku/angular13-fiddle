import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey } from './store';
import { TodoEffects } from './store/todo.effects';
import { reducer } from './store/todo.reducer';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule {}
