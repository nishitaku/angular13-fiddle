import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { Todo } from 'src/app/todo/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private now = new Date();
  private todos: Todo[] = [
    {
      id: 1,
      text: 'todo 01',
      checked: false,
      createdAt: this.now,
      updatedAt: this.now,
    },
    {
      id: 2,
      text: 'todo 02',
      checked: false,
      createdAt: this.now,
      updatedAt: this.now,
    },
    {
      id: 3,
      text: 'todo 03',
      checked: false,
      createdAt: this.now,
      updatedAt: this.now,
    },
  ];

  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    return from([this.todos]);
  }

  find(id: number): Observable<Todo> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      return throwError(() => new Error(`no data (id = ${id})`));
    }
    return of(todo);
  }
}
