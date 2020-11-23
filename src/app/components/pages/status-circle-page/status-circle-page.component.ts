import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-circle-page',
  templateUrl: './status-circle-page.component.html',
  styleUrls: ['./status-circle-page.component.scss'],
})
export class StatusCirclePageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <h4>Default Style:</h4>
  <div class="progress-circle-container-1">
    <antra-progress-spinner></antra-progress-spinner>
    <antra-progress-spinner [percentage]="50"></antra-progress-spinner>
    <antra-progress-spinner [percentage]="75"></antra-progress-spinner>
    <antra-progress-spinner [percentage]="100"></antra-progress-spinner>
  </div>
  <h4>Customized Style:</h4>
  <div class="progress-circle-container-2">
    <antra-progress-spinner [radius]="25" class="customized"></antra-progress-spinner>
    <antra-progress-spinner [percentage]="50" [radius]="25" class="customized"></antra-progress-spinner>
    <antra-progress-spinner [percentage]="75" [radius]="25" class="customized"></antra-progress-spinner>
    <antra-progress-spinner [percentage]="100" [radius]="25" class="customized"></antra-progress-spinner>
  </div>
</div>

`;
  scssSource = `.example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .progress-circle-container-1 {
    position: relative;
    width: 1200px;
    height: 150px;
    background: #0b82c2;
    z-index: 1000;
  }
  .progress-circle-container-2 {
    position: relative;
    width: 1200px;
    height: 150px;
    background: #11c20b;
    z-index: 1000;
  }
  .customized::ng-deep .progress-circle-properites {
    stroke-width: 6;
    stroke: black;
  }
  .customized::ng-deep .progress-circle-1to50percent {
    stroke-width: 6;
    stroke: rgb(128, 0, 60);
  }
  .customized::ng-deep .progress-circle-51to80percent {
    stroke-width: 6;
    stroke: blue;
  }
  .customized::ng-deep .progress-circle-81to100percent {
    stroke-width: 6;
    stroke: yellow;
  }
  .customized::ng-deep circle {
    fill: none;
  }
  .customized::ng-deep .textStyle {
    font-family: 'Arial';
    font-size: 11px;
    font-weight: 600;
    fill: rgb(14, 13, 13);
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-status-circle-example',
    templateUrl: './status-circle-example.component.html',
    styleUrls: ['./status-circle-example.component.scss']
  })
  export class StatusCircleExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;
  constructor() {}

  ngOnInit(): void {}
}
