import { TestBed } from '@angular/core/testing';

import { State, StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get and set state teset', () => {
    const testStates: State[] = [
      { id: '001', name: 'name1', isEnable: true },
      { id: '002', name: 'name2', isEnable: true },
      { id: '003', name: 'name3', isEnable: true },
    ];
    service.setCurrentState(testStates);
    expect(service.getCurrentStates()).toEqual(testStates);
  });
});
