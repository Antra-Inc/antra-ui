import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
  url?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Button',
    children: [
      {name: 'button 1', url: './button'},
      {name: 'button 2', url: './btn2'},
      {name: 'button 1', url: './button'},
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-examplet-sidnav',
  templateUrl: './examplet-sidnav.component.html',
  styleUrls: ['./examplet-sidnav.component.scss']
})
export class ExampletSidnavComponent implements OnInit {

  @Output() navClick = new EventEmitter<void>();

  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  onNavClick() {
    this.navClick.emit();
  }

  // flat node tree logic:
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
