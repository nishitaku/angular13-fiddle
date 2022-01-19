import { Injectable } from '@angular/core';
import { State } from '../state/state.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getStates(): Promise<State[]> {
    const testStates: State[] = [
      { id: '001', name: 'name1', isEnable: true },
      { id: '002', name: 'name2', isEnable: true },
      { id: '003', name: 'name3', isEnable: true },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(testStates);
      }, 2000);
    });
  }
}
