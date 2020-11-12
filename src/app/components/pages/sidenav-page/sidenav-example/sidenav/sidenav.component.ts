import { Component } from '@angular/core';
import { NavLinkNode, NavLinkNodeFlat } from '../../../../../interface/app.interface';

@Component({
  selector: 'app-sidenav-example',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

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
