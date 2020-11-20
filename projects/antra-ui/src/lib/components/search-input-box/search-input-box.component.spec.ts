import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputBoxComponent } from './search-input-box.component';

describe('SearchInputBoxComponent', () => {
  let component: SearchInputBoxComponent;
  let fixture: ComponentFixture<SearchInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
