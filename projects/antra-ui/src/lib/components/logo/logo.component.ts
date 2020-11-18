import { Component, Input, OnInit } from '@angular/core';
/**
 * `antra-logo` component provides a default style with classes `logo`, `logo__svg` and `logo__text`.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})

/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/logo</example-url>
 */

export class LogoComponent implements OnInit {
  @Input() svgPath;
  @Input() logoText;

  // tslint:disable-next-line: typedef
  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
