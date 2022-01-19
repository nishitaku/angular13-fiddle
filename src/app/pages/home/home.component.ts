import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  states$ = this.stateService.states$;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.apiCall();
  }
}
