import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNode } from './interface/app.interface';

const SIDENAV_DATA: NavLinkNode[] = [
  {
    name: 'Buttons',

    children: [
      { name: 'ButtonComponent', url: 'components/button' },
      { name: 'RaisedButtonComponent', url: 'components/raised-button' },
    ],
  },
  {
    name: 'Widgets',

    children: [{ name: 'WidgetComponent', url: 'components/widget' }],
  },
  {
    name: 'Logo',

    children: [{ name: 'LogoComponent', url: 'components/logo' }],
  },
];

interface NavLinkNodeFlat {
  expandable: boolean;
  name: string;
  url: string;
  level: number;
}

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
      icon: 'assignment',
      children: [
        { name: 'ButtonComponent', url: 'components/button' },
        { name: 'RaisedButtonComponent', url: 'components/raised-button' },
      ],
    },
    {
      name: 'SideNav',
      icon: 'folder_shared',
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
