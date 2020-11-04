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
  treeNodeToggleRemember = [];

  @Input() sideNavTextColor = 'red'; //  customrize the sidenav text color;
  @Input() sideNavBackgroundColor = ''; // customrize the sidenav sidenavbar color;

  @Input() sidenavMode: 'over' | 'push' | 'side' = 'over'; // set sidenav mode;
  @Input() treeNodePaddingIndent = '0px'; // set the subnode left padding;

  @Input() isOpen = true; // set the side open or close;
  @Input() containerClass = ''; // customrize sidenav container style;

  @Input() sideNavConfig: NavLinkNode[] = [
    {
      name: 'SideNav event tree',
      icon: 'person',
      children: [
        { name: 'button', url: 'button', icon: 'person' },
        { name: 'raised-button', url: 'raised-button', icon: 'person'},
      ],
    },
  ]; // set tree node structure;

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
    console.log(this.isExpanded);
    //this.treeControl.collapseAll();
  }

  handleMouseEnter(): void {
    this.isExpanded = true;
    console.log(this.isExpanded);
  }

  handleTreeNodeToggle(node): void {
    this.treeControl.toggle(node);
    this.treeNodeToggleRemember.push(node);
  }

}
