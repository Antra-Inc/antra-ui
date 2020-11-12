import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'antra-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
@Input() percentage = 75;
  constructor() { }

  ngOnInit(): void {
  }

}
