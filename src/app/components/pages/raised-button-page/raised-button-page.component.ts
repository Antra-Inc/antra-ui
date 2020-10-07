import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raised-button-page',
  templateUrl: './raised-button-page.component.html',
  styleUrls: ['./raised-button-page.component.scss'],
})
export class RaisedButtonPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <antra-raised-button btnColor="primary" btnText="primary"></antra-raised-button>
  <antra-raised-button btnColor="accent" btnText="accent"></antra-raised-button>
  <antra-raised-button btnColor="warn" btnText="warn"></antra-raised-button>
  <antra-raised-button btnColor="error" btnText="error"></antra-raised-button>
  <antra-raised-button disabled btnText="disabled"></antra-raised-button>
  <antra-raised-button class="customized" btnText="customized"></antra-raised-button>
</div>`;
  scssSource = `  .example-content {
    padding: 10px 0;
  
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  
  ::ng-deep .customized {
    button.mat-raised-button {
      background-color: teal;
      font-size: 25px;
      padding: 5px 15px;
    }
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-raised-button-example',
    templateUrl: './raised-button-example.component.html',
    styleUrls: ['./raised-button-example.component.scss'],
  })
  export class RaisedButtonExampleComponent implements OnInit {
    constructor() {}
  
    ngOnInit(): void {}
  }
  `;
  constructor() {}

  ngOnInit() {}
}
