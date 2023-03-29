import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface PlaceholderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  constructor(private http: HttpClient) {}

  getTodosFromPlaceholder(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .pipe(tap((response) => console.warn(response)));
  }
}
