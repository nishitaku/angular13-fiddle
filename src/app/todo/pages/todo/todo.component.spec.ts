import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { render, screen } from '@testing-library/angular';
import {
  PlaceholderService,
  PlaceholderTodo,
} from 'src/app/shared/services/placeholder/placeholder.service';
import { TodoEffects } from '../../store/todo.effects';
import { reducer } from '../../store/todo.reducer';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let placeholderService: PlaceholderService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    const renderResult = await render(TodoComponent, {
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ todo: reducer }),
        EffectsModule.forRoot([TodoEffects]),
      ],
    });
    fixture = renderResult.fixture;
    component = fixture.componentInstance;

    placeholderService = fixture.debugElement.injector.get(PlaceholderService);
    httpMock = fixture.debugElement.injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('PlaceholderService#getPlaceholderTodosが呼び出されていること', () => {
    // arrange
    spyOn(placeholderService, 'getPlaceholderTodos').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(placeholderService.getPlaceholderTodos).toHaveBeenCalled();
  });

  it('ngOnInit', fakeAsync(() => {
    // arrange
    const dummyData: PlaceholderTodo[] = [
      {
        userId: 1,
        id: 1,
        title: 'hogehoge',
        completed: true,
      },
    ];
    // act
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
    tick();
    fixture.detectChanges();
    // assert
    expect(screen.getByText('TODO一覧')).toBeTruthy();
    expect(screen.getByText('hogehoge')).toBeTruthy();
  }));
});
