import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[antraWidget]',
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/widget</example-url>
 */
export class AntraWidgetDirective implements OnInit {
  @Input() width: any = '250px';
  @Input() height: any = '140px';
  @Input() backgroundColor: any = '#985633';

  borderRadius: any = '8px';
  boxShadow: any = '3px 2px 3px #888888';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.backgroundColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.width);
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.borderRadius);
    this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', this.boxShadow);
  }
}
