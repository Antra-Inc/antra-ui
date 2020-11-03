import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[antraWidget]',
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/widget</example-url>
 */
export class AntraWidgetDirective implements OnInit {
  // default styles
  borderRadius: any = '8px';
  boxShadow: any = '3px 2px 3px #888888';

  domElement: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.domElement = this.elementRef.nativeElement;
    const applyStyles = {
      'border-radius': this.borderRadius,
      'box-shadow': this.boxShadow,
    };
    Object.keys(applyStyles).forEach((newStyle) => {
      this.renderer.setStyle(this.domElement, `${newStyle}`, applyStyles[newStyle]);
    });
  }
}
