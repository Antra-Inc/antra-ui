import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AntraUiModule } from '../../antra-ui.module';
import { NotificationDialogComponent } from './notification-dialog.component';

@Component({
  template: `<antra-notification-dialog
    class="default"
    [successMessage]="successMessage"
  ></antra-notification-dialog>`,
})
class TestHostComponent { }

describe('PasswordResetSuccessfulComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NotificationDialogComponent, TestHostComponent],
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

  it('should have span with text content check_circle', () => {
    const spanElement = fixture.nativeElement.querySelector('span');
    expect(spanElement.textContent.trim()).toBe('check_circle');
  });

  it('should have div with class names form-container notification-dialog antra-widget', () => {
    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.className).toContain('form-container notification-dialog antra-widget');
  });
});
