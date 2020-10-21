import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss'],
})
export class WidgetPageComponent implements OnInit {
  htmlSource = `<div style="display: flex; flex-direction: row">
  <article antraWidget>
    <p>
      <span class="big">350</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Total Active Employees</span>
    </p>
  </article>
  <article antraWidget [width]="'300px'" [backgroundColor]="'#856400'">
    <p>
      <span class="big">100</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Total New Hires</span>
    </p>
  </article>
  <article antraWidget [height]="'160px'" [backgroundColor]="'#128564'">
    <p>
      <span class="big">14</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Attrition Rate</span>
    </p>
  </article>
  <article antraWidget [width]="'300px'" [height]="'180px'" [backgroundColor]="'#350564'">
    <p>
      <span class="big">14</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Custom width, height and backgroundColor</span>
    </p>
  </article>
</div>
`;
  scssSource = `article {
    margin: 10px;
    color: white;  
    p {
      padding: 10px;
    }
    .big {
      font-size: 24px;
    }
    .small {
      font-size: 10px;
      padding: 4px;
    }
    .medium {
      font-size: 16px;
    }
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-widget-example',
    templateUrl: './widget-example.component.html',
    styleUrls: ['./widget-example.component.scss']
  })
  export class WidgetExampleComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }
  }
  `;
  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}
}
