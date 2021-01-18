import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AntraUiModule } from '../../antra-ui.module';
import { PasswordResetComponent } from './password-reset.component';

@Component({
  template: `<antra-password-reset
    class="default"
    [emailAddressValidationMessage]="emailAddressValidationMsg"
    (passwordResetActionEvent)="sendVerificationEmail($event)"
  ></antra-password-reset>`,
})
class TestHostComponent {}

describe('PasswordResetComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PasswordResetComponent, TestHostComponent],
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

  it('should have h3 with text content Password Reset', () => {
    const h3Element = fixture.nativeElement.querySelector('h3');
    expect(h3Element.textContent.trim()).toBe('Password Reset');
  });

  it('should have form with class name reset-form', () => {
    const frmElement = fixture.nativeElement.querySelector('form');
    expect(frmElement.className).toContain('reset-form');
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
