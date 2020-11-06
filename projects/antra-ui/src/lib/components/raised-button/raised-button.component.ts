import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { btnColor } from '../../interfaces/button.interface';

@Component({
  selector: 'antra-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/raised-button</example-url>
 */
export class RaisedButtonComponent implements OnInit {
  @Input() btnColor: btnColor = 'primary';
  @Input() btnText = '';
  @Input() disabled = 'false';

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
