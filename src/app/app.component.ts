import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
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
  // tslint:disable-next-line: variable-name
  private _transformer = (node: NavLinkNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      level,
    };
  };

  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<NavLinkNodeFlat>(
    (node) => node.level,
    (node) => node.expandable
  );

  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );
  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = SIDENAV_DATA;
    // this.treeControl.expand(this.treeControl.dataNodes[0]);
  }
  hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;
}
