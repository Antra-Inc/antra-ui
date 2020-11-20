import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AntraUiModule } from '../../antra-ui.module';
import { ProgressSpinnerComponent } from './progress-spinner.component';

@Component({
  template: ` <antra-progress-spinner [percentage]="percentage" [radius]="radius"></antra-progress-spinner> `,
})
class TestHostComponent {
  percentage = '50';
  radius = '25';
}

describe('ProgressSpinnerComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProgressSpinnerComponent, TestHostComponent],
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

  it('should have percentage = 50 and radius = 25', () => {
    component.percentage = '50';
    component.radius = '25';
    fixture.detectChanges();
    const radiusElement = fixture.nativeElement.querySelector('.progress-circle-1to50percent');
    const textElement = fixture.nativeElement.querySelector('.textStyle');
    fixture.detectChanges();
    expect(textElement.textContent.trim()).toBe('50%');
    expect(radiusElement.style.r).toContain('25');
  });

  it('should have percentage = 100 and radius = 15', () => {
    component.percentage = '100';
    component.radius = '15';
    fixture.detectChanges();
    const radiusElement = fixture.nativeElement.querySelector('.progress-circle-81to100percent');
    const textElement = fixture.nativeElement.querySelector('.textStyle');
    fixture.detectChanges();
    expect(textElement.textContent.trim()).toBe('100%');
    expect(radiusElement.style.r).toContain('15');
  });
});


