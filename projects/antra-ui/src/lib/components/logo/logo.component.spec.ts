import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AntraUiModule } from '../../antra-ui.module';
import { LogoComponent } from './logo.component';

@Component({
  template: ` <antra-logo [svgPath]="svgPath" [logoText]="logoText"> </antra-logo> `,
})
class TestHostComponent {
  svgPath = '/assets/svg/logo.svg';
  logoText = 'BRS';
}

describe('LogoComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LogoComponent, TestHostComponent],
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

  it('should show a proper logo with different inputs', () => {
    // inputs one
    component.svgPath = '/assets/svg/logo.svg';
    component.logoText = 'BRS';
    fixture.detectChanges();
    const imgElement = fixture.nativeElement.querySelector('.logo__svg');
    const textElement = fixture.nativeElement.querySelector('.logo__text');
    fixture.detectChanges();
    expect(imgElement.src).toContain('/assets/svg/logo.svg');
    expect(textElement.textContent.trim()).toBe('BRS');

    // inputs two
    component.svgPath = '/assets/svg/google.svg';
    component.logoText = 'Google';
    fixture.detectChanges();
    expect(imgElement.src).toContain('/assets/svg/google.svg');
    expect(textElement.textContent.trim()).toBe('Google');
  });
});
