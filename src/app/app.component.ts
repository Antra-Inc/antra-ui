import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNode, NavLinkNodeFlat } from 'antra-ui';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
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
  {
    name: 'Login',

    children: [{ name: 'LoginComponent', url: 'components/login' }],
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
      icon: 'outbond',
      children: [
        { name: 'ButtonComponent', url: 'components/button' },
        { name: 'RaisedButtonComponent', url: 'components/raised-button' },
      ],
    },
    {
      name: 'SideNav',
      icon: 'chrome_reader_mode',
      children: [{ name: 'SidenavbarComponent', url: 'components/sidenav' }],
    },
    {
      name: 'Widgets',
      icon: 'featured_play_list',
      children: [{ name: 'WidgetComponent', url: 'components/widget' }],
    },
    {
      name: 'Logo',
      icon: 'fingerprint',
      children: [{ name: 'LogoComponent', url: 'components/logo' }],
    },
  ];

  constructor(private router: Router) {}

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    if (event.url) {
      this.router.navigate([event.url]);
    }
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
