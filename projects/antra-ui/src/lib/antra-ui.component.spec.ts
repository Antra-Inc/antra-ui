import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntraUiComponent } from './antra-ui.component';

describe('AntraUiComponent', () => {
  let component: AntraUiComponent;
  let fixture: ComponentFixture<AntraUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntraUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
