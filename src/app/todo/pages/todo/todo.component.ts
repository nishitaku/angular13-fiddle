import { Component, OnInit } from '@angular/core';
import { TodoFacade } from 'src/app/todo/store/todo.facade';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  loading$ = this.todoFacade.loading$;
  todos$ = this.todoFacade.todos$;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.loadAll();
    // this.todoFacade.todos$.subscribe((todos) => {
    //   console.warn(`todo update ${todos}`);
    // });
  }
}
