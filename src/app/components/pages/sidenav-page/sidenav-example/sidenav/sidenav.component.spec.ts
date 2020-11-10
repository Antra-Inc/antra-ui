import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidenavComponent } from './sidenav.component';

@Component({
  template: `
    <app-sidenav>
      <h3>
        Hello World
      </h3>
    </app-sidenav>
  `,
})
class TestHostComponent {}

const fakeDate = [
  {
    name: 'example-sidenav tree1',
    icon: 'person',
    children: [
      { name: 'example-option1', url: 'components/example-option1' },
      { name: 'example-option2', url: 'components/example-option2'},
    ],
  },
  {
    name: 'example-sidenav tree2',
    icon: 'menu',
    children: [
      { name: 'example-option3', url: 'components/example-option3' },
    ],
  },
];

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        TestHostComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoule show templete in ng-content.', () => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    const de = testfixture.debugElement.query(By.css('h3'));

    expect(de.nativeElement.textContent).toContain('Hello World');
  });

  it('shold get fakedata with @Input sideNavConfig', () => {
    component.sideNavConfig = fakeDate;
    fixture.detectChanges();

    console.log(component.dataSource.data);
    expect(fixture.componentInstance.dataSource.data.length).toBe(2);
  });

  // it('shouled emit node', () => {
  //   spyOn(component.listOptionClicked, 'emit');
  //   fixture.detectChanges();

  //   const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));
  //   if (true) {}
  //   console.log(listItems);
  //   listItems[1].triggerEventHandler('click', null);

  //   expect(component.listOptionClicked.emit).toHaveBeenCalled();
  // });

});
