import { Component, Input, OnInit } from '@angular/core';

export type btnType = 'raised' | 'basic' | 'flat' | 'icon' | 'fab' | 'miniFab';
export type btnColor = 'basic' | 'primary' | 'accent' | 'warn';

@Component({
  selector: 'antra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnType: btnType = 'raised';
  @Input() btnColor: btnColor = 'primary';
  @Input() btnText = '';

  constructor() {}
  ngOnInit() {}
}
