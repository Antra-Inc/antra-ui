import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { AntraUiModule } from '../../antra-ui.module';
import { By } from '@angular/platform-browser';

@Component({
  template: `<antra-login (loginActionEvent)="getActionName($event)"></antra-login>`,
})
class TestHostComponent {}

describe('LoginComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent, TestHostComponent],
        imports: [AntraUiModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have event binding attribute with the name loginActionEvent', () => {
    const loginElement = fixture.debugElement.query(By.css('antra-login'));

    // tslint:disable-next-line: no-unused-expression
    expect(loginElement.nativeElement.attributes).toContain['loginActionEvent'];
  });

  it('should have button with text content LOGIN', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent.trim()).toBe('LOGIN');
  });

  it('should have b element with textcontent Login using', () => {
    // const boldElement = fixture.nativeElement.querySelector('b');
    // expect(boldElement.textContent.trim()).toBe('Login using');

    const boldElement = fixture.debugElement.query(By.css('b'));
    expect(boldElement.nativeElement.innerText).toBe('Login using');
  });

  // it('should have class with the name widget1 for article element', () => {
  //   const article: HTMLElement = fixture.nativeElement.querySelector('article');
  //   expect(article.className).toContain('widget1');
  // });

  // it(`should have a p tag of innerText 'customize style with className' `, () => {
  //   const p = fixture.debugElement.query(By.css('p'));
  //   expect(p.nativeElement.innerText).toBe('customize style with className');
  // });

  it('should have img element with classname form__button-img', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.className).toContain('form__button-img');
  });
});
