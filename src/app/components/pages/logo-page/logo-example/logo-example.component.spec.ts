import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoExampleComponent } from './logo-example.component';

describe('LogoExampleComponent', () => {
  let component: LogoExampleComponent;
  let fixture: ComponentFixture<LogoExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
