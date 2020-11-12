import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavLinkNode, NavLinkNodeFlat } from 'projects/antra-ui/src/lib/interfaces/sidenavbar.interface';

import { SidenavComponent } from './sidenav.component';

@Component({
  template: `
    <app-sidenav
      [containerClass]="containerClass"
      [sideNavBackground]="sideNavBackground"
      [sideNavTextColor]="sideNavTextColor"
      [isOpen]="isOpen"

      [sideNavConfig]="sideNavConfig"
      (listOptionClicked)="getClickEventFromSideNav($event)"
    >
      <h3>
        Hello World
      </h3>
    </app-sidenav>
  `,
})
class TestHostComponent {
  containerClass = 'sidenav-container';
  sideNavBackground = 'green';
  sideNavTextColor = '#7fff00';
  optionInSideNav = '';
  isOpen = true;

  sideNavConfig: NavLinkNode[] = [
    {
      name: 'example-sidenav tree1',
      icon: 'person',
      children: [
        { name: 'example-option1', url: 'components/example-option1' },
        { name: 'example-option2', url: 'components/example-option2' },
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

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    this.optionInSideNav = event.name;
  }
}

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

  it('shoule display any templete inside the the sidenavbar tag correctly', () => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    const de = testfixture.debugElement.query(By.css('h3'));

    expect(de.nativeElement.textContent).toContain('Hello World');
  });

  it('should render the correct Text Color for the sideNav after customize the sideNavTextColor attribute.', () => {
    component.sideNavTextColor = 'blue';
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));

    for (const item of listItems) {
      expect(item.nativeElement.style.color).toBe('blue');
    }
  });

  it('should render the correct background for the sideNav after customize the sideNavBackground attribute.', () => {
    component.sideNavBackground = 'blue';
    fixture.detectChanges();

    const matDrawer = fixture.debugElement.query(By.css('mat-drawer'));
    expect(matDrawer.nativeElement.style.background).toBe('blue');

    const matTree = fixture.debugElement.query(By.css('mat-tree'));
    expect(matTree.nativeElement.style.background).toBe('blue');
  });

  it('should use the correct class for the sideNav after customize the containerClass.', () => {
    component.containerClass = 'sidenav-container';
    fixture.detectChanges();

    const matDrawerContainer = fixture.debugElement.query(By.css('mat-drawer-container'));
    expect(matDrawerContainer.nativeElement.getAttribute('class')).toContain('sidenav-container');
  });

  it('shold get tree node config data after customize the sideNavConfig attribute ', () => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    testfixture.detectChanges();

    const sidenav = testfixture.debugElement.query(By.directive(SidenavComponent));
    const data = testfixture.componentInstance.sideNavConfig;

    expect(sidenav.componentInstance.sideNavConfig.length).toBe(2);
    expect(sidenav.componentInstance.sideNavConfig).toEqual(data);
  });

  // tslint:disable-next-line: deprecation
  it('shouled emit node after click tree node in the sidenavbar', fakeAsync(() => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    const sidenav = testfixture.debugElement.query(By.directive(SidenavComponent));

    spyOn(sidenav.componentInstance.listOptionClicked, 'emit');
    // spyOn(testfixture.componentInstance, 'getClickEventFromSideNav');

    const data: NavLinkNodeFlat = {
      expandable: true,
      name: 'example-sidenav tree1',
      url: undefined,
      icon: 'person',
      level: 0
    };
    testfixture.detectChanges();
    // const matListItems = testfixture.debugElement.queryAll(By.css('mat-list-item'));

    testfixture.whenStable().then(() => {

      console.log('sidenav-dataSource: ', sidenav.componentInstance.dataSource.data);
      console.log('testfixture-nativeElement: ', testfixture.nativeElement);
      console.log('sidenav-nativeElement: ', sidenav.nativeElement);

      const matListItems = testfixture.debugElement.queryAll(By.css('mat-list-item'));
      console.log(matListItems);
    });
    // matListItems[0].triggerEventHandler('click', null);
    // testfixture.detectChanges();

    // expect(sidenav.componentInstance.listOptionClicked.emit).toHaveBeenCalledWith(data);
    // expect(testfixture.componentInstance.getClickEventFromSideNav).toHaveBeenCalledWith(data);

  }));

});
