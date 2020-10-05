import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBtn2Component } from './example-btn2.component';

describe('ExampleBtn2Component', () => {
  let component: ExampleBtn2Component;
  let fixture: ComponentFixture<ExampleBtn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleBtn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
