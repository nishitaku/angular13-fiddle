import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { render, screen } from '@testing-library/angular';
import { TodoService } from 'src/app/shared/services/todo/todo.service';
import { TodoEffects } from '../../store/todo.effects';
import { reducer } from '../../store/todo.reducer';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    const renderResult = await render(TodoComponent, {
      imports: [
        StoreModule.forRoot({ todo: reducer }),
        EffectsModule.forRoot([TodoEffects]),
      ],
    });
    fixture = renderResult.fixture;
    component = fixture.componentInstance;

    todoService = fixture.debugElement.injector.get(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TodoService#findAllが呼び出されていること', () => {
    // arrange
    spyOn(todoService, 'findAll').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(todoService.findAll).toHaveBeenCalled();
  });

  it('ngOnInit', fakeAsync(() => {
    // arrange
    // act
    component.ngOnInit();
    // assert
    expect(screen.getByText('TODO一覧')).toBeTruthy();
    expect(screen.getByText('todo 02')).toBeTruthy();
  }));
});
