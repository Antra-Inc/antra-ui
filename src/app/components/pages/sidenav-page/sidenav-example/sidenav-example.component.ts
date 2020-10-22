import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NavLinkNode, NavLinkNodeFlat } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-sidenav-example',
  templateUrl: './sidenav-example.component.html',
  styleUrls: ['./sidenav-example.component.scss']
})
export class SidenavExampleComponent implements OnInit {

  @Input() sidenavMode: 'over' | 'push' | 'side' = 'side';
  @Input() TreeNodePaddingIndent = '10px';
  @Input() toggleSideBar = false;
  @Input() containerClass = 'example-container';
  @Input() sideNavData: NavLinkNode[] = [
    {
      name: 'SideNav event tree',
      children: [
        { name: 'button', url: 'button' },
        { name: 'raised-button', url: 'raised-button'},
      ],
    },
  ];

  @Output() listOptionClicked = new EventEmitter();

  // tslint:disable-next-line: variable-name
  private _transformer = (node: NavLinkNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      level,
    };
  }

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

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.sideNavData;
  }

  hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;

  // tslint:disable-next-line: typedef
  handleListOnClick(node: NavLinkNodeFlat) {
    this.listOptionClicked.emit(node);
  }
}
