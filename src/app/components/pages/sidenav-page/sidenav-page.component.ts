import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLinkNodeFlat, NavLinkNode } from 'src/app/interface/app.interface';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss']
})
export class SidenavPageComponent {
  htmlSource = `<mat-drawer-container [class]="containerClass" autosize>
  <mat-drawer #drawer [mode]="sidenavMode" [opened]="toggleSideBar" class="sidenavbar-sidenav">
    <mat-nav-list>
      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding [matTreeNodePaddingIndent]="treeNodePaddingIndent">
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

  scssSource = `.sidenavbar-sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100%;
  }`;

  tsSource = `import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
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
    @Input() containerClass = '';
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
