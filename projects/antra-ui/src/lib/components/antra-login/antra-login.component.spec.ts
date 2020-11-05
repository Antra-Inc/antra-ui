import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntraLoginComponent } from './antra-login.component';

describe('AntraLoginComponent', () => {
  let component: AntraLoginComponent;
  let fixture: ComponentFixture<AntraLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntraLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntraLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
