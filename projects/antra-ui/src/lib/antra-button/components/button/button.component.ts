import { Component, Input, OnInit } from '@angular/core';
import { btnColor } from '../../interfaces/button.interface';

@Component({
  selector: 'antra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
/**
 * Example of usage:
 * <example-url>https://angular.io/</example-url>
 */
export class ButtonComponent implements OnInit {
  @Input() btnColor: btnColor = 'primary';
  @Input() btnText = '';

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    console.log('oninit');
  }
}
