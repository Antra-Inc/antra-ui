/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ButtonComponent } from './button.component';
import { AntraUiModule } from '../../antra-ui.module';

@Component({
  template: ` <antra-button [btnColor]="btnColor" [btnText]="btnText" [disabled]="disabled"> </antra-button>`,
})
class TestHostComponent {
  btnColor = 'primary';
  btnText = 'primary button';
  disabled = false;
}

describe('ButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonComponent, TestHostComponent],
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

  it('should show a proper button with different inputs', () => {
    // inputs one
    component.btnText = 'primary btn';
    component.btnColor = 'primary';
    component.disabled = false;
    fixture.detectChanges();
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.className).toContain('mat-button');
    expect(btnElement.className).toContain('mat-primary');
    expect(btnElement.className).not.toContain('mat-button-disabled');
    expect(btnElement.textContent.trim()).toBe('primary btn');

    // inputs two
    component.btnText = 'accent btn';
    component.btnColor = 'accent';
    component.disabled = true;
    fixture.detectChanges();
    expect(btnElement.className).toContain('mat-button');
    expect(btnElement.className).toContain('mat-accent');
    expect(btnElement.className).toContain('mat-button-disabled');
    expect(btnElement.textContent.trim()).toBe('accent btn');
  });
});
