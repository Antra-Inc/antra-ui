import { Directive, OnInit, HostBinding } from '@angular/core';

/**
 * `antraWiget` directive provides a default style with class `antra-widget` for the host element.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Directive({
  selector: '[antraWidget]',
})
/**
 * Example of usage:
 * <example-url>https://antra-inc.github.io/Antra-ui/components/widget</example-url>
 */
export class AntraWidgetDirective implements OnInit {
  @HostBinding('class') elementClass = 'antra-widget';

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
