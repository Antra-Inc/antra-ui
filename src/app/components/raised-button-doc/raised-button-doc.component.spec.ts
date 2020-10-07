import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwrapperComponent } from './raised-button-doc.component';

describe('TestwrapperComponent', () => {
  let component: TestwrapperComponent;
  let fixture: ComponentFixture<TestwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
