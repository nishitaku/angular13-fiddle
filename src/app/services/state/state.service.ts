import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

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

  constructor(private apiService: ApiService) {}

  async apiCall(): Promise<void> {
    const states = await this.apiService.getStates();
    this.stateSubject.next(states);
  }

  getCurrentStates(): State[] {
    return this.stateSubject.value;
  }

  setCurrentState(states: State[]) {
    this.stateSubject.next(states);
  }
}
