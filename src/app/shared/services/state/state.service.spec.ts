import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs';

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

  it('apiCall test', async () => {
    await service.apiCall();
    const states = service.getCurrentStates();
    const testStates: State[] = [
      { id: '001', name: 'name1', isEnable: true },
      { id: '002', name: 'name2', isEnable: true },
      { id: '003', name: 'name3', isEnable: true },
    ];
    expect(states.length).toEqual(3);
    expect(states).toEqual(testStates);
  });

  it('apiCallSync test', (done) => {
    service.apiCallSync();
    const testStates: State[] = [
      { id: '001', name: 'name1', isEnable: true },
      { id: '002', name: 'name2', isEnable: true },
      { id: '003', name: 'name3', isEnable: true },
    ];
    setTimeout(() => {
      const states = service.getCurrentStates();
      expect(states.length).toEqual(3);
      expect(states).toEqual(testStates);
      done();
    }, 2001);

    // service.states$.pipe(skip(1)).subscribe((states) => {
    //   console.log(states);
    //   expect(states.length).toEqual(3);
    //   expect(states).toEqual(testStates);
    //   done();
    // });
  });
});
