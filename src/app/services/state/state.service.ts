import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State {
  id: string;
  name: string;
  isEnable: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new BehaviorSubject<State[]>([]);
  get state$() {
    return this.stateSubject.asObservable();
  }

  constructor() {}

  getCurrentStates(): State[] {
    return this.stateSubject.value;
  }

  setCurrentState(states: State[]) {
    this.stateSubject.next(states);
  }
}
