import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.scss']
})
export class ProgressSpinnerPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <h4>Default Style:</h4>
  <antra-progress-spinner></antra-progress-spinner>
  <antra-progress-spinner [percentage]="50"></antra-progress-spinner>
  <antra-progress-spinner [percentage]="75"></antra-progress-spinner>
  <antra-progress-spinner [percentage]="100"></antra-progress-spinner>
  <h4>Customized Style:</h4>
  <antra-progress-spinner [radius]="25" class="customized"></antra-progress-spinner>
  <antra-progress-spinner [percentage]="50" [radius]="25" class="customized"></antra-progress-spinner>
  <antra-progress-spinner [percentage]="75" [radius]="25" class="customized"></antra-progress-spinner>
  <antra-progress-spinner [percentage]="100" [radius]="25" class="customized"></antra-progress-spinner>
</div>
`;
  scssSource = `.example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .customized::ng-deep .progress-circle-properites {
    stroke-width: 6;
    stroke: orange;
  }
  .customized::ng-deep .progress-circle-1to50percent {
    stroke-width: 6;
    stroke: blue;
  }
  .customized::ng-deep .progress-circle-51to80percent {
    stroke-width: 6;
    stroke: green;
  }
  .customized::ng-deep .progress-circle-81to100percent {
    stroke-width: 6;
    stroke:yellow;
  }
  .customized::ng-deep circle {
    fill: #53022b73;
  }
  .customized::ng-deep .textStyle {
    font-family: 'Arial';
    font-size:11px;
    font-weight: 600;
    fill:rgb(14, 13, 13);
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-progress-spinner-example',
    templateUrl: './progress-spinner-example.component.html',
    styleUrls: ['./progress-spinner-example.component.scss']
  })
  export class ProgressSpinnerExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;
  constructor() { }

  ngOnInit(): void {
  }

}
