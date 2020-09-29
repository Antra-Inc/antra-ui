import { Component, Input, OnInit } from '@angular/core';

type btnType = 'raised' | 'basic' | 'flat' | 'icon' | 'fab' | 'miniFab';
type btnColor = 'basic' | 'primary' | 'accent' | 'warn';

@Component({
  selector: 'antra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnType: btnType = 'raised';
  @Input() btnColor: btnColor = 'primary';

  constructor() {}

  ngOnInit() {}
}
