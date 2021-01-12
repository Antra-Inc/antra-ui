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

  it('should have button with text content LOGIN', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent.trim()).toBe('LOGIN');
  });

  it('should have form with class name login-form', () => {
    const frmElement = fixture.nativeElement.querySelector('form');
    expect(frmElement.className).toContain('login-form');
  });

  it('should have input with class name form__input', () => {
    const frmElement = fixture.nativeElement.querySelector('input');
    expect(frmElement.className).toContain('form__input');
  });

  it('should have div with class names form-container antra-widget', () => {
    const frmElement = fixture.nativeElement.querySelector('div');
    expect(frmElement.className).toContain('form-container antra-widget');
  });

});
