import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss'],
})
export class PasswordResetPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <antra-password-reset
          class="default"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          (passwordResetActionEvent)="sendVerificationEmail1($event)"
        ></antra-password-reset>
      </td>
      <td>
        <antra-password-reset
          class="customized"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          (passwordResetActionEvent)="sendVerificationEmail2($event)"
        ></antra-password-reset>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <hr />
      </td>
    </tr>
    <tr>
      <td>
        <p class="text-center">
          {{ details1 | json }}
        </p>
      </td>
      <td>
        <p class="text-center">
          {{ details2 | json }}
        </p>
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
    selector: 'app-password-reset-example',
    templateUrl: './password-reset-example.component.html',
    styleUrls: ['./password-reset-example.component.scss'],
  })
  export class PasswordResetExampleComponent implements OnInit {
    details1: string;
    details2: string;
  
    emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    sendVerificationEmail1(details1: string) {
      this.details1 = details1;
    }
    sendVerificationEmail2(details2: string) {
      this.details2 = details2;
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
