import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { AntraUiModule } from '../../antra-ui.module';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <antra-login (clickEvent)="getActionName($event)"></antra-login>`,
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

  it('should have event binding attribute with the name clickEvent', () => {
    const loginElement = fixture.debugElement.query(By.css('antra-login'));

    // tslint:disable-next-line: no-unused-expression
    expect(loginElement.nativeElement.attributes).toContain['clickEvent'];
  });

  it('should have button with text content LOGIN', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent.trim()).toBe('LOGIN');
  });

  it('should have button with text content LOGIN', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent.trim()).toBe('LOGIN');
  });

  it('should have b element with textcontent Login using ', () => {
    const boldElement = fixture.nativeElement.querySelector('b');
    expect(boldElement.textContent.trim()).toBe('Forgot Password');
    expect(boldElement.className).toContain('light-color');
  });
});


