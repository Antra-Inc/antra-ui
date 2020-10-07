/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaisedButtonPageComponent } from './raised-button-page.component';

describe('RaisedButtonPageComponent', () => {
  let component: RaisedButtonPageComponent;
  let fixture: ComponentFixture<RaisedButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisedButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
