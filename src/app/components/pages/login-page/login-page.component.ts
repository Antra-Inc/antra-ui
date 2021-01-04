import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <antra-login
          class="default"
          [loginUsingOption]="true"
          [loginUsingGmail]="true"
          [loginUsingOffice365]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameOne($event)"
        ></antra-login>
      </td>

      <td>
        <antra-login
          class="example1"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameTwo($event)"
        ></antra-login>
      </td>
      <td>
        <antra-login
          class="example2"
          [loginUsingOption]="true"
          [loginUsingGmail]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameThree($event)"
        ></antra-login>
      </td>
      <td>
        <antra-login
          class="example3"
          [loginUsingOption]="true"
          [loginUsingOffice365]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameFour($event)"
        ></antra-login>
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <hr />
      </td>
    </tr>
    <tr>
      <td>
        <h2 class="text-center">
          {{ actionNameOne }}
        </h2>
      </td>
      <td>
        <h2 class="text-center">
          {{ actionNameTwo }}
        </h2>
      </td>
      <td>
        <h2 class="text-center">
          {{ actionNameThree }}
        </h2>
      </td>
      <td>
        <h2 class="text-center">
          {{ actionNameFour }}
        </h2>
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
  
  .example1::ng-deep .form-container {
    background-color: darkslategray;
    height: 320px;
  }
  
  .example2::ng-deep .form-container {
    background-color: azure;
  }
  .example2::ng-deep .btn-danger {
    width: 100%;
    position: absolute;
    right: 30px;
  }
  
  .example3::ng-deep .form-container {
    background-color: bisque;
  }
  .example3::ng-deep .form__button-right {
    width: 100%;
    position: absolute;
    left: 30px;
  }
  
  .text-center{
    text-align: center;
  }
`;

  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-login-example',
    templateUrl: './login-example.component.html',
    styleUrls: ['./login-example.component.scss'],
  })
  export class LoginExampleComponent implements OnInit {
    actionNameOne: string;
    actionNameTwo: string;
    actionNameThree: string;
    actionNameFour: string;
  
    // passwordPattern = "";
    loginUsingOption = false;
    loginUsingGmail = true;
    loginUsingOffice365 = true;
  
    emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];
    passwordValidationMsg = [
      'Password is required',
      'Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number',
    ];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    getActionNameOne(details: string) {
      this.actionNameOne = details;
    }
    // tslint:disable-next-line: typedef
    getActionNameTwo(details: string) {
      this.actionNameTwo = details;
    }
    // tslint:disable-next-line: typedef
    getActionNameThree(details: string) {
      this.actionNameThree = details;
    }
    // tslint:disable-next-line: typedef
    getActionNameFour(details: string) {
      this.actionNameFour = details;
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
