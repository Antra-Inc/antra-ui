import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNode, NavLinkNodeFlat } from './interface/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isOpen = true;
  sideNavConfig: NavLinkNode[] = [
    {
      name: 'Buttons',

      children: [
        { name: 'ButtonComponent', url: 'components/button' },
        { name: 'RaisedButtonComponent', url: 'components/raised-button' },
      ],
    },
    {
      name: 'SideNav',

      children: [
        { name: 'Reusable SideNav Bar', url: 'components/sidenav' },
      ],
    },
  ];

  constructor(private router: Router) {}

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    this.router.navigate([event.url]);
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
