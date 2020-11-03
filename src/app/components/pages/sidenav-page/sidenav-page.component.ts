import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNodeFlat, NavLinkNode } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss']
})
export class SidenavPageComponent {
  htmlSource = ` <antra-sidenavbar
    [containerClass]="'sidenav-container'"
    [sideNavConfig]="sideNavConfig"
    (listOptionClicked)="getClickEventFromSideNav($event)"
    [isOpen]="isOpen"
  >
    <button type="button" mat-raised-button (click)="toggleSideNav()">Toggle sidenav</button>
    <h1 *ngIf="optionInSideNav !== ''">{{ optionInSideNav }} be clicked.</h1>
    <h1 *ngIf="optionInSideNav === ''">Select an optione.</h1>
    <router-outlet></router-outlet>
  </antra-sidenavbar>
  `;

  scssSource = ` ::ng-deep .sidenav-container {
    width: 500px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0;
    box-sizing: border-box;
  }
  `;

  tsSource = `  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { NavLinkNodeFlat, NavLinkNode } from 'src/app/interface/app.interface';

  @Component({
    selector: 'app-sidenav-page',
    templateUrl: './sidenav-page.component.html',
    styleUrls: ['./sidenav-page.component.scss']
  })
  export class SidenavPageComponent {

    optionInSideNav = '';
    isOpen = true;
    sideNavConfig: NavLinkNode[] = [
      {
        name: 'example-sidenav tree',
        children: [
          { name: 'example-option1', url: 'components/example-option1' },
          { name: 'example-option2', url: 'components/example-option2'},
        ],
      },
    ];

    constructor(private router: Router) {}

    getClickEventFromSideNav(event: NavLinkNodeFlat): void {
      console.log(event);
      this.optionInSideNav = event.name;
      // this.router.navigate([event.url]);
    }

    toggleSideNav(): void {
      this.isOpen = !this.isOpen;
    }
  }
  `;

  optionInSideNav = '';
  isOpen = true;
  sideNavConfig: NavLinkNode[] = [
    {
      name: 'example-sidenav tree',
      icon: 'person',
      children: [
        { name: 'example-option1', url: 'components/sidenav/button' },
        { name: 'example-option2', url: 'components/sidenav/raised-button'},
      ],
    },
  ];

  constructor(private router: Router) {}

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    console.log(event);
    this.optionInSideNav = event.name;
    // this.router.navigate([event.url]);
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
