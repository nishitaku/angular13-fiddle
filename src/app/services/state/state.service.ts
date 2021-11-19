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
  private statesSubject = new BehaviorSubject<State[]>([]);
  get states$() {
    return this.statesSubject.asObservable();
  }

  constructor(private apiService: ApiService) {}

  async apiCall(): Promise<void> {
    const states = await this.apiService.getStates();
    this.statesSubject.next(states);
  }

  getCurrentStates(): State[] {
    return this.statesSubject.value;
  }

  setCurrentState(states: State[]) {
    this.statesSubject.next(states);
  }
}
