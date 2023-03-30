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

  getPlaceholderTodos(): Observable<PlaceholderTodo[]> {
    return this.http.get<PlaceholderTodo[]>(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
  }

  getPlaceholderTodoById(id: number): Observable<PlaceholderTodo> {
    return this.http.get<PlaceholderTodo>(
      `https://jsonplaceholder.typicode.com/todos?userId=1&id=${id}`
    );
  }
}
