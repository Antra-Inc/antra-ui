/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaisedButtonExampleComponent } from './raised-button-example.component';

describe('RaisedButtonExampleComponent', () => {
  let component: RaisedButtonExampleComponent;
  let fixture: ComponentFixture<RaisedButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisedButtonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
