import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { StateService } from 'src/app/shared/services/state/state.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let stateService: StateService;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    stateService = TestBed.inject(StateService);
    apiService = TestBed.inject(ApiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('表示の確認', fakeAsync(() => {
    // act
    component.ngOnInit();
    tick(2000);
    fixture.detectChanges();
    // assert
    // expect(fixture.nativeElement.textContent).toContain('States');
    expect(fixture.nativeElement.textContent).toContain('name2');
  }));
});
