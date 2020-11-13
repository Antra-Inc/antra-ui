import { AntraWidgetDirective } from './antra-widget.directive';

import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AntraUiModule } from '../../antra-ui.module';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <article antraWidget class="widget1" style="height: 140px; width: 300px; background-color: rgb(133, 100, 0)">
      <p>customize style with className</p>
    </article>
  `,
})
class TestWidgetDirectiveComponent {}

describe('AntraWidgetDirective', () => {
  let component: TestWidgetDirectiveComponent;
  let fixture: ComponentFixture<TestWidgetDirectiveComponent>;

  beforeEach(() => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestWidgetDirectiveComponent, AntraWidgetDirective],
        imports: [AntraUiModule],
      }).compileComponents();
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWidgetDirectiveComponent);
    component = fixture.componentInstance;
    // initial binding
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new AntraWidgetDirective();
    expect(directive).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should have article with bgColor rgb(133, 100, 0)', () => {
    const article: HTMLElement = fixture.nativeElement.querySelector('article');
    const bgColor = article.style.backgroundColor;
    expect(bgColor).toBe('rgb(133, 100, 0)');
  });

  it('should have class with the name widget1 for article element', () => {
    const article: HTMLElement = fixture.nativeElement.querySelector('article');
    expect(article.className).toContain('widget1');
  });

  it(`should have a p tag of innerText 'customize style with className' `, () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.innerText).toBe('customize style with className');
  });
});
