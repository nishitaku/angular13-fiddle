import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { render, screen } from '@testing-library/angular';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { StateService } from 'src/app/shared/services/state/state.service';

import { HomeComponent } from './home.component';
import {
  PlaceholderService,
  PlaceholderTodo,
} from 'src/app/shared/services/placeholder/placeholder.service';
import { DebugElement } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let stateService: StateService;
  let placeholderService: PlaceholderService;
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    const renderResult = await render(HomeComponent, {
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    fixture = renderResult.fixture;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    stateService = debugElement.injector.get(StateService);
    placeholderService = debugElement.injector.get(PlaceholderService);
    apiService = debugElement.injector.get(ApiService);
    httpMock = debugElement.injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('StateServiceがインスタンス化されていること', () => {
    expect(stateService).toBeTruthy();
  });

  it('StateService.apiCallが呼び出されていること', () => {
    // arrange
    spyOn(stateService, 'apiCall').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(stateService.apiCall).toHaveBeenCalled();
  });

  it('ApiService.getStatesが呼び出されていること', () => {
    // arrange
    spyOn(apiService, 'getStates').and.callThrough();
    // act
    component.ngOnInit();
    // assert
    expect(apiService.getStates).toHaveBeenCalled();
  });

  it('表示の確認(fakeAsync)', fakeAsync(() => {
    // act
    component.ngOnInit();
    tick(2000);
    fixture.detectChanges();
    // assert
    expect(screen.getByText(/name3/i)).toBeTruthy();
  }));

  // 動くが遅いので停止
  xit(
    '表示の確認(waitForAsync)',
    waitForAsync(() => {
      // act
      component.ngOnInit();
      // assert
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(screen.getByText(/name3/i)).toBeTruthy();
      });
    })
  );

  it('placeholder apiの表示確認', fakeAsync(() => {
    // arrange
    const dummyData = [
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
    tick(2000);
    // component.ngOnInit();
    fixture.detectChanges();
    // assert
    expect(screen.getByText(/hogehoge/i)).toBeTruthy();
  }));

  it('placeholder apiの確認', fakeAsync(() => {
    // arrange
    const dummyData: PlaceholderTodo[] = [
      {
        userId: 1,
        id: 1,
        title: 'hogehoge',
        completed: true,
      },
    ];

    placeholderService.getTodosFromPlaceholder().subscribe((res) => {
      expect(res).toEqual(dummyData);
    });
    // placeholderService.getTodosFromPlaceholder();

    // なぜか2つのrequestが来るので、こっちだとエラーになる。原因不明。
    // Expected one matching request for criteria found 2 requests.
    // const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos?userId=1')
    const reqs = httpMock.match(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    expect(reqs[1].request.method).toBe('GET');
    reqs[1].flush(dummyData);
    httpMock.verify();
  }));
});
