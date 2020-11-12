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
    containerClass="sidenav-container"
    sideNavBackground="url('https://picsum.photos/600/600?random=1')"
    sideNavTextColor="#7fff00"
    isOpen="isOpen"

    [sideNavConfig]="sideNavConfig"
    (listOptionClicked)="getClickEventFromSideNav($event)"
  >

    <div class="sideNav-content-container">
      <button type="button" mat-raised-button (click)="toggleSideNav()">Toggle sidenav</button>
      <h1 *ngIf="optionInSideNav !== ''">{{ optionInSideNav }} be clicked.</h1>
      <h1 *ngIf="optionInSideNav === ''">Select an optione.</h1>
      <router-outlet></router-outlet>
    </div>

  </antra-sidenavbar>
  `;

  scssSource = ` ::ng-deep .sidenav-container {
    width: 500px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0;
    box-sizing: border-box;
  }
  .sideNavBar-container {
    padding-left: 10px;
    margin: 10px;
  }
  .sideNav-content-container {
    padding-left: 10px;
    margin-left: 250px;
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

    constructor() {}

    getClickEventFromSideNav(event: NavLinkNodeFlat): void {
      this.optionInSideNav = event.name;
      // this.router.navigate([event.url]);
    }

    toggleSideNav(): void {
      this.isOpen = !this.isOpen;
    }
  }
  `;
}
