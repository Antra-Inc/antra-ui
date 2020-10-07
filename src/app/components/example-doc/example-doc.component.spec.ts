/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExampleDocComponent } from './example-doc.component';

describe('ExampleDocComponent', () => {
  let component: ExampleDocComponent;
  let fixture: ComponentFixture<ExampleDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
