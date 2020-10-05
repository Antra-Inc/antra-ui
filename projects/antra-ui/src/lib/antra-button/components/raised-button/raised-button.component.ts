import { Component, Input, OnInit } from '@angular/core';
import { btnColor } from '../../interfaces/button.interface';

@Component({
  selector: 'antra-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
})
/**
 * Example of usage:
 * <example-url>https://angular.io/</example-url>
 */
export class RaisedButtonComponent implements OnInit {
  @Input() btnColor: btnColor = 'primary';
  @Input() btnText = '';

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
