import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-successful-page',
  templateUrl: './password-reset-successful-page.component.html',
  styleUrls: ['./password-reset-successful-page.component.scss'],
})
export class PasswordResetSuccessfulPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <antra-password-reset-successful
          class="default"
          [successfulMessage] = "successfulMessage1"
        ></antra-password-reset-successful>
      </td>
      <td>
        <antra-password-reset-successful
          class="customized"
          [btnText]="btnText"
          [showRedirectButton]="true"
          [successfulMessage] = "successfulMessage2"
          (passwordResetSuccessfulEvent)="showActionDetails($event)"
        ></antra-password-reset-successful>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <hr />
      </td>
    </tr>
    <tr>
      <td>
      </td>
      <td>
        <h3 class="text-center">
          {{ details }}
        </h3>
      </td>
    </tr>
  </table>
</div>
`;
  scssSource = `.example-content {
    padding: 10px 0;
  
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .text-center {
    text-align: center;
  }
  
  .customized::ng-deep .form-container {
    background-color: powderblue;
  }
`;

  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-password-reset-successful-example',
    templateUrl: './password-reset-successful-example.component.html',
    styleUrls: ['./password-reset-successful-example.component.scss'],
  })
  export class PasswordResetSuccessfulExampleComponent implements OnInit {
    details: string;
  
    successfulMessage1 = 'Password reset link has been send to your registered email id';
    successfulMessage2 = 'Password reset successful';
  
    btnText = 'CLICK HERE TO LOGIN';
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    showActionDetails(details: string) {
      this.details = details;
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
