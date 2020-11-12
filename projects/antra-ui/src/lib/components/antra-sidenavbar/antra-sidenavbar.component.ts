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

  isExpanded = false;

  @Input() sideNavTextColor = 'red'; //  customrize the sidenav text color;
  @Input() sideNavBackground = ''; // customrize the sidenav sidenavbar color;
  @Input() sidenavMode: 'over' | 'push' | 'side' = 'side'; // set sidenav mode;
  @Input() treeNodePaddingIndent = '0px'; // set the subnode left padding;
  @Input() isOpen = true; // set the side open or close;
  @Input() containerClass = ''; // customrize sidenav container style;
  @Input() sideNavConfig: NavLinkNode[] = [];

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
    this.dataSource.data = this.sideNavConfig;
  }

  hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;

  // tslint:disable-next-line: typedef
  handleListOnClick(node: NavLinkNodeFlat) {
    this.listOptionClicked.emit(node);
  }

  handleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  handleMouseLeave(): void {
    this.isExpanded = false;
  }

  handleMouseEnter(): void {
    this.isExpanded = true;
  }

  handleTreeNodeToggle(node): void {
    this.treeControl.toggle(node);
  }

}
