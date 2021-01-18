import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss'],
})
export class ChangePasswordPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <antra-change-password
          class="default"
          [passwordPattern]="passwordPattern"
          [userName]="userName1"
          [emailAddress]="emailAddress1"
          [passwordValidationMessage]="passwordValidationMsg"
          [confirmPasswordValidationMessage]="confirmPasswordValidationMsg"
          (passwordResetActionEvent)="changePassword1($event)"
        ></antra-change-password>
      </td>
      <td>
        <antra-change-password
          class="customized"
          [passwordPattern]="passwordPattern"
          [userName]="userName2"
          [emailAddress]="emailAddress2"
          [passwordValidationMessage]="passwordValidationMsg"
          [confirmPasswordValidationMessage]="confirmPasswordValidationMsg"
          (passwordResetActionEvent)="changePassword2($event)"
        ></antra-change-password>
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
    selector: 'app-change-password-example',
    templateUrl: './change-password-example.component.html',
    styleUrls: ['./change-password-example.component.scss'],
  })
  export class ChangePasswordExampleComponent implements OnInit {
    details1: string;
    details2: string;
  
    passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
  
    passwordValidationMsg = [
      'Password is required',
      'Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number',
    ];
    confirmPasswordValidationMsg = ['Confirm Password is required', 'Passwords do not match'];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    changePassword1(details1: string) {
      this.details1 = details1;
    }
    changePassword2(details2: string) {
      this.details2 = details2;
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
