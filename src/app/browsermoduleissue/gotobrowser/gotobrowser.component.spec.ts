import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotobrowserComponent } from './gotobrowser.component';

describe('GotobrowserComponent', () => {
  let component: GotobrowserComponent;
  let fixture: ComponentFixture<GotobrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotobrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotobrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
