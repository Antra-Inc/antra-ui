import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-page',
  templateUrl: './logo-page.component.html',
  styleUrls: ['./logo-page.component.scss'],
})
export class LogoPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <h4>Default without Text:</h4>
  <antra-logo  svgPath="/assets/svg/logo.svg" > </antra-logo>
  <h4>Default with Text:</h4>
  <antra-logo  svgPath="/assets/svg/logo.svg"  logoText="BRS"> </antra-logo> 
  <h4>Customize svg:</h4>
  <antra-logo svgPath="/assets/svg/logo.svg" class="customized-svg"  ></antra-logo>
  <h4>Customize text:</h4>
  <antra-logo svgPath="/assets/svg/logo.svg" class="customized-text"  logoText="BRS"></antra-logo>
  <h4>Customize all:</h4>
  <antra-logo svgPath="/assets/svg/logo.svg" class="customized-all-1"  logoText="BRS"></antra-logo>
  <h4>Customize all:</h4>
  <antra-logo svgPath="/assets/svg/google.svg" class="customized-all-2" logoText="Google"></antra-logo>     
</div>`;
  scssSource = `
  .customized-svg::ng-deep .logo__svg{
    width: 100px;
    height: 100px;
    background-color: lightgray;
  }

  .customized-text::ng-deep .logo__text{
    color:blue;
    font-size: 35px;
  }

  .customized-all-1::ng-deep .logo{
    background-color: lightgray;
    color:white;
    padding:0 10px;

    .logo__svg{
      width:60px;
      height: 40px;
    }
    .logo__text{
      font-size: 20px;
      font-weight: 500;
    }
  }

  .customized-all-2::ng-deep .logo{
    background-color: lightgray;
    color:white;
    padding-right:10px;
    .logo__svg{
      width:80px;
      height: 80px;
    }
    .logo__text{
      font-size: 30px;
      font-weight: 500;
    }

  }`;
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
