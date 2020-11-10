/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

import { RaisedButtonComponent } from './raised-button.component';
import { AntraUiModule } from '../../antra-ui.module';

@Component({
  template: ` <antra-raised-button [btnColor]="btnColor" [btnText]="btnText" [disabled]="disabled">
  </antra-raised-button>`,
})
class TestHostComponent {
  btnColor = 'primary';
  btnText = 'primary button';
  disabled = false;
}

describe('RaisedButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RaisedButtonComponent, TestHostComponent],
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

  it('should show a proper raised button with different inputs', () => {
    // inputs one
    component.btnText = 'primary btn';
    component.btnColor = 'primary';
    component.disabled = false;
    fixture.detectChanges();
    const btnElement = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
    expect(btnElement.className).toContain('mat-raised-button');
    expect(btnElement.className).toContain('mat-primary');
    expect(btnElement.className).not.toContain('mat-button-disabled');
    expect(btnElement.textContent.trim()).toBe('primary btn');

    // inputs two
    component.btnText = 'secondary btn';
    component.btnColor = 'secondary';
    component.disabled = true;
    fixture.detectChanges();
    expect(btnElement.className).toContain('mat-raised-button');
    expect(btnElement.className).toContain('mat-secondary');
    expect(btnElement.className).toContain('mat-button-disabled');
    expect(btnElement.textContent.trim()).toBe('secondary btn');
  });
});
