import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/shared/services/placeholder/placeholder.service';
import { StateService } from 'src/app/shared/services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  states$ = this.stateService.states$;
  placeholderTodos$: any;

  constructor(
    private stateService: StateService,
    private placeholderService: PlaceholderService
  ) {}

  ngOnInit(): void {
    this.stateService.apiCall();
    this.placeholderTodos$ = this.placeholderService.getTodosFromPlaceholder();
  }
}
