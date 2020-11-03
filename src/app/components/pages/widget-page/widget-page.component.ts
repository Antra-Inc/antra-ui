import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss'],
})
export class WidgetPageComponent implements OnInit {
  htmlSource = `<div style="display: flex; flex-direction: row">
  <article antraWidget style="height: 140px; width: 250px; background-color: #985633">
    <p>
      <span class="big">350</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Total Active Employees</span>
    </p>
  </article>
  <article antraWidget style="height: 140px; width: 300px; background-color: #856400">
    <p>
      <span class="big">100</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Total New Hires</span>
    </p>
  </article>
  <article antraWidget style="height: 180px; width: 200px; background-color: #128564">
    <p>
      <span class="big">14</span> &nbsp;<span class="medium material-icons"> arrow_upward </span> <br />
      <span class="small">Attrition Rate</span>
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
