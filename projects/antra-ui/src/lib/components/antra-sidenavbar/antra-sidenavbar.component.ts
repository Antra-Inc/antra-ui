import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NavLinkNode, NavLinkNodeFlat } from '../../interfaces/sidenavbar.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'antra-sidenavbar',
  templateUrl: './antra-sidenavbar.component.html',
  styleUrls: ['./antra-sidenavbar.component.scss']
})
export class AntraSidenavbarComponent implements OnInit {

  isExpanded = false;
  treeNodeToggle = true;

  @Input() sidenavMode: 'over' | 'push' | 'side' = 'side';
  @Input() treeNodePaddingIndent = '0px';
  @Input() isOpen = true;
  @Input() containerClass = '';
  @Input() sideNavConfig: NavLinkNode[] = [
    {
      name: 'SideNav event tree',
      icon: 'person',
      children: [
        { name: 'button', url: 'button', icon: 'person' },
        { name: 'raised-button', url: 'raised-button', icon: 'person'},
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
      icon: node.icon,
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
    console.log('navbar init');
    this.dataSource.data = this.sideNavConfig;
    console.log('dataSource: ', this.dataSource.data);
    console.log('dataSource: ', this.dataSource);
  }

  hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;

  // tslint:disable-next-line: typedef
  handleListOnClick(node: NavLinkNodeFlat) {
    this.listOptionClicked.emit(node);

  }

  handleExpanded(): void {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }

  handleMouseLeave(): void {
    this.isExpanded = false;
    this.treeControl.collapseAll();
  }

}
