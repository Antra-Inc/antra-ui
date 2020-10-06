import { Component, Input, OnInit } from '@angular/core';
import { btnColor } from '../../interfaces/button.interface';

@Component({
  selector: 'antra-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/button</example-url>
 */
export class ButtonComponent implements OnInit {
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
