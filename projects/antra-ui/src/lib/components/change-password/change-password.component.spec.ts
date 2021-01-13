import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AntraUiModule } from '../../antra-ui.module';
import { ChangePasswordComponent } from './change-password.component';

@Component({
  template: `<antra-change-password
  class="default"
  [passwordValidationMessage]="passwordValidationMsg"
  [confirmPasswordValidationMessage]="confirmPasswordValidationMsg"
  (passwordResetActionEvent)="changePassword1($event)"
></antra-change-password>`,
})
class TestHostComponent {}

describe('ChangePasswordComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChangePasswordComponent, TestHostComponent],
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

  it('should have button with text content SUBMIT', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent.trim()).toBe('SUBMIT');
  });

  it('should have h3 with text content Reset your password', () => {
    const h3Element = fixture.nativeElement.querySelector('h3');
    expect(h3Element.textContent.trim()).toBe('Reset your password');
  });

  it('should have form with class name change-pwd-form', () => {
    const frmElement = fixture.nativeElement.querySelector('form');
    expect(frmElement.className).toContain('change-pwd-form');
  });

  it('should have input with class name form__input', () => {
    const frmElement = fixture.nativeElement.querySelector('input');
    expect(frmElement.className).toContain('form__input');
  });

  it('should have div with class names form-container antra-widget', () => {
    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.className).toContain('form-container antra-widget');
  });
});
