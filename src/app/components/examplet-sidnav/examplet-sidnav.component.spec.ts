import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampletSidnavComponent } from './examplet-sidnav.component';

describe('ExampletSidnavComponent', () => {
  let component: ExampletSidnavComponent;
  let fixture: ComponentFixture<ExampletSidnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampletSidnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampletSidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
