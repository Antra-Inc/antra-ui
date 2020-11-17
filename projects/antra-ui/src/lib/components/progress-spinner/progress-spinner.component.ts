import { Component, Input, OnInit } from '@angular/core';
/**
 * `antra-progress-spinner` component provides a default style using input properties `percentage`, `radius` and different `.scss` classes.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/progress-spinner</example-url>
 */
export class ProgressSpinnerComponent implements OnInit {
  @Input() percentage = 0;
  @Input() radius = 15;
  public strokeDashoffset = 0;
  public circumference: number;

/**
 * @ignore
 */
  constructor() {}

/**
 * @ignore
 */
  ngOnInit(): void {
    this.circumference = 2 * Math.PI * this.radius;
    const offset = this.circumference - (this.percentage / 100) * this.circumference;
    this.strokeDashoffset = offset;
  }
}
