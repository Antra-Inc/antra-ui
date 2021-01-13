import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetSuccessfulComponent } from './password-reset-successful.component';

describe('PasswordResetSuccessfulComponent', () => {
  let component: PasswordResetSuccessfulComponent;
  let fixture: ComponentFixture<PasswordResetSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
