import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-page',
  templateUrl: './logo-page.component.html',
  styleUrls: ['./logo-page.component.scss'],
})
export class LogoPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <antra-logo></antra-logo> 
  <antra-logo logoPath="/assets/svg/logo.svg"></antra-logo>
  <antra-logo logoPath="/assets/svg/google.svg"></antra-logo>
</div>
`;
  scssSource = `.example-content {
    display: flex;
    flex-direction: row;
  }
  antra-logo::ng-deep .logoSize {
    width: 100px;
    height: 100px;
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-logo-example',
    templateUrl: './logo-example.component.html',
    styleUrls: ['./logo-example.component.scss']
  })
  export class LogoExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;

  constructor() {}

  ngOnInit(): void {}
}
