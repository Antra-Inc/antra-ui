/* tslint:disable:no-unused-variable */
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavLinkNode, NavLinkNodeFlat } from 'projects/antra-ui/src/lib/interfaces/sidenavbar.interface';
import { AntraSidenavbarComponent } from './antra-sidenavbar.component';
import { AntraUiModule } from 'antra-ui';

@Component({
  template: `
    <antra-sidenavbar
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
    </antra-sidenavbar>
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

describe('AntraSidenavbarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach( waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AntraSidenavbarComponent,
        TestHostComponent
      ],
      imports: [AntraUiModule],
      schemas: [NO_ERRORS_SCHEMA]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('shoule display any templete inside the the sidenavbar tag correctly', () => {
    console.log(fixture.nativeElement);
    const matDrawerContent = fixture.nativeElement.querySelector('mat-drawer-content');
    // const matDrawerContent = fixture.debugElement.query(By.css('mat-drawer-content'));
    console.log(matDrawerContent);
    // const ngContent = matDrawerContent.nativeElement.query(By.css('ng-content'));
    // const elementh3 = ngContent.nativeElement.query(By.css('h3'));

    // expect(elementh3.nativeElement.textContent).toContain('Hello World');
  });

  xit('should render the correct Text Color for the sideNav after customize the sideNavTextColor attribute.', () => {
    component.sideNavTextColor = 'blue';
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));

    for (const item of listItems) {
      expect(item.nativeElement.style.color).toBe('blue');
    }
  });

  xit('should render the correct background for the sideNav after customize the sideNavBackground attribute.', () => {
    component.sideNavBackground = 'blue';
    fixture.detectChanges();

    const matDrawer = fixture.debugElement.query(By.css('mat-drawer'));
    expect(matDrawer.nativeElement.style.background).toBe('blue');

    const matTree = fixture.debugElement.query(By.css('mat-tree'));
    expect(matTree.nativeElement.style.background).toBe('blue');
  });

  xit('should use the correct class for the sideNav after customize the containerClass.', () => {
    component.containerClass = 'sidenav-container';
    fixture.detectChanges();

    const matDrawerContainer = fixture.debugElement.query(By.css('mat-drawer-container'));
    expect(matDrawerContainer.nativeElement.getAttribute('class')).toContain('sidenav-container');
  });

  xit('should get tree node config data after customize the sideNavConfig attribute ', waitForAsync(() => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    testfixture.detectChanges();

    const sidenav = testfixture.debugElement.query(By.directive(AntraSidenavbarComponent));
    testfixture.detectChanges();
    console.log('sidenav: ', sidenav);
    // const data = testfixture.componentInstance.sideNavConfig;

    // expect(sidenav.componentInstance.sideNavConfig.length).toBe(2);
    // expect(sidenav.componentInstance.sideNavConfig).toEqual(data);
  }));

  xit('shouled emit node after click tree node in the sidenavbar', fakeAsync(() => {
    const testfixture = TestBed.createComponent(TestHostComponent);
    const sidenav = testfixture.debugElement.query(By.directive(AntraSidenavbarComponent));

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
