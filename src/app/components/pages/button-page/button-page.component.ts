import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss'],
})
export class ButtonPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <antra-button btnColor="primary" btnText="primary"></antra-button>
  <antra-button btnColor="accent" btnText="accent"></antra-button>
  <antra-button btnColor="warn" btnText="warn"></antra-button>
  <antra-button btnColor="error" btnText="error"></antra-button>
  <antra-button disabled btnText="disabled"></antra-button>
  <antra-button class="customized" btnText="customized"></antra-button>
</div>`;
  scssSource = `  .example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  
  ::ng-deep .customized {
    button.mat-button {
      font-size: 20px;
      width: 150px;
      color: teal;
      border: 1px solid teal;
    }
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
`;

  constructor() {}

  ngOnInit(): void {}
}
