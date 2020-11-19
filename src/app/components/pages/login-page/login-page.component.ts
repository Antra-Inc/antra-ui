import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <antra-login></antra-login>
</div>`;
  scssSource = `  .example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-login-example',
    templateUrl: './login-example.component.html',
    styleUrls: ['./login-example.component.scss']
  })
  export class LoginExampleComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }
  }
`;

  constructor() {}

  ngOnInit(): void {}
}
