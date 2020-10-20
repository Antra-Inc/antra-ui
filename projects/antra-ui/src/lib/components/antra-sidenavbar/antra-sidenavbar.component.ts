import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NavLinkNode, NavLinkNodeFlat } from '../../interfaces/sidenavbar.interface';

@Component({
  selector: 'antra-sidenavbar',
  templateUrl: './antra-sidenavbar.component.html',
  styleUrls: ['./antra-sidenavbar.component.scss']
})
export class AntraSidenavbarComponent implements OnInit {

  @Input() sidenavMode: 'over' | 'push' | 'side' = 'side';
  @Input() treeNodePaddingIndent = '10px';
  @Input() toggleSideBar = false;
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
