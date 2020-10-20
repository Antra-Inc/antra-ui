/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AntraSidenavbarComponent } from './antra-sidenavbar.component';

describe('AntraSidenavbarComponent', () => {
  let component: AntraSidenavbarComponent;
  let fixture: ComponentFixture<AntraSidenavbarComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntraSidenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntraSidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
