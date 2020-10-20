import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNodeFlat, NavLinkNode } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss']
})
export class SidenavPageComponent {
  htmlSource = `<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer [mode]="sidenavMode" [opened]="opened">
    <mat-nav-list>
      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding [matTreeNodePaddingIndent]="TreeNodePaddingIndent">
          <mat-list-item (click)="handleListOnClick(node)">
            <span mat-line >{{ node.name }}</span>
          </mat-list-item>
        </mat-tree-node>
        <mat-tree-node *matTreeNodeDef="let node; when: hasChild">
          <mat-list-item matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">
            <mat-icon>
              {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
            </mat-icon>
            <span mat-line>{{ node.name }}</span>
          </mat-list-item>
        </mat-tree-node>
      </mat-tree>
    </mat-nav-list>
  </mat-drawer>

  <mat-drawer-content>
    <ng-content></ng-content>
  </mat-drawer-content>

</mat-drawer-container>
  `;

  scssSource = `.example-container {
    width: 500px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }`;

  tsSource = `import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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
    @Input() opened = true;
    @Input() TreeNodePaddingIndent = '10px';
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

    private _transformer = (node: NavLinkNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        url: node.url,
        level,
      };
    }

    treeControl = new FlatTreeControl<NavLinkNodeFlat>(
      (node) => node.level,
      (node) => node.expandable
    );

    treeFlattener = new MatTreeFlattener(
      this._transformer,
      (node) => node.level,
      (node) => node.expandable,
      (node) => node.children
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor() { }

    ngOnInit(): void {
      this.dataSource.data = this.sideNavData;
    }

    hasChild = (_: number, node: NavLinkNodeFlat) => node.expandable;

    handleListOnClick(node: NavLinkNodeFlat) {
      this.listOptionClicked.emit(node);
    }
  }
  `;

  optionInSideNav = '';
  toggleSideBar = true;
  sideNavData: NavLinkNode[] = [
    {
      name: 'example-sidenav tree',
      children: [
        { name: 'example-option1', url: 'components/sidenav/button' },
        { name: 'example-option2', url: 'components/sidenav/raised-button'},
      ],
    },
  ];

  constructor(private router: Router) {}

  getClickEventFromSideNav(event: NavLinkNodeFlat): void {
    console.log(event);
    this.optionInSideNav = event.name;
    // this.router.navigate([event.url]);
  }

  toggleSideNav(): void {
    this.toggleSideBar = !this.toggleSideBar;
  }
}
