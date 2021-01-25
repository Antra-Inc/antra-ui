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
        <h3>Example 1</h3>
        <antra-login
          class="default"
          [showLoginError]="showLoginError1"
          [loginErrorMessage]="loginErrorMessage1"
          [loginUsingOption]="true"
          [loginUsingGmail]="true"
          [loginUsingOffice365]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          [passwordPattern]="passwordPattern"
          (loginActionEvent)="getActionNameOne($event)"
        ></antra-login>
      </td>
      <td>
        <h3>Example 2</h3>
        <!-- Default Password Pattern Validation Applied From Library -->
        <antra-login
          class="example2"
          [loginUsingOption]="true"
          [loginUsingGmail]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameTwo($event)"
        ></antra-login>
      </td>
    </tr>
    <tr>
      <td>
        <p class="text-center">
          {{ actionNameOne | json }}
        </p>
      </td>
      <td>
        <p class="text-center">
          {{ actionNameTwo | json }}
        </p>
      </td>
    </tr>
  </table>
  <hr />
  <table>
    <tr>
      <td>
        <h3>Example 3</h3>
        <!-- Default Password Pattern Validation Applied From Library -->
        <antra-login
          class="example3"
          [loginUsingOption]="true"
          [loginUsingOffice365]="true"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg"
          (loginActionEvent)="getActionNameThree($event)"
        ></antra-login>
      </td>
      <td>
        <h3>Example 4</h3>
        <antra-login
          class="example1"
          [showLoginError]="showLoginError2"
          [loginErrorMessage]="loginErrorMessage2"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          [passwordValidationMessage]="passwordValidationMsg1"
          [passwordPattern]="passwordPattern1"
          (loginActionEvent)="getActionNameFour($event)"
        ></antra-login>
      </td>
    </tr>
    <tr>
      <td>
        <p class="text-center">
          {{ actionNameThree | json }}
        </p>
      </td>
      <td>
        <p class="text-center">
          {{ actionNameFour | json }}
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
  
  .example1::ng-deep .form-container {
    background-color: lightgoldenrodyellow;
  }
  
  .example2::ng-deep .form-container {
    background-color: azure;
  }
  
  .example3::ng-deep .form-container {
    background-color: bisque;
  }
  
  .text-center {
    text-align: center;
  }  
`;

  tsSource = `import { Component, OnInit } from '@angular/core';
  import { LoginActions } from 'antra-ui/lib/interfaces/login.interface';
  
  @Component({
    selector: 'app-login-example',
    templateUrl: './login-example.component.html',
    styleUrls: ['./login-example.component.scss'],
  })
  export class LoginExampleComponent implements OnInit {
    actionNameOne: LoginActions;
    actionNameTwo: LoginActions;
    actionNameThree: LoginActions;
    actionNameFour: LoginActions;
  
    loginErrorMessage1: string;
    showLoginError1 = false;
  
    loginErrorMessage2: string;
    showLoginError2 = false;
  
    passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
    passwordPattern1 = '^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$';
  
    loginUsingOption = false;
    loginUsingGmail = true;
    loginUsingOffice365 = true;
  
    emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];
    passwordValidationMsg = [
      'Password is required',
      'Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number',
    ];
    passwordValidationMsg1 = [
      'Password is required',
      'Password should have minimum 8 characters, at least 1 uppercase and 1 lowercase letter',
    ];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    getActionNameOne(details: LoginActions) {
      this.showLoginError1 = false;
      if (
        details.actionType === 'ForgotPassword' ||
        details.actionType === 'GoogleLogin' ||
        details.actionType === 'MsftLogin'
      ) {
        this.actionNameOne = details;
      } else if (
        details.actionType === 'Login' &&
        details.email === 'admin@gmail.com' &&
        details.password === 'Password@123'
      ) {
        this.actionNameOne = details;
        this.showLoginError1 = false;
        this.loginErrorMessage1 = '';
      } else {
        this.showLoginError1 = true;
        this.loginErrorMessage1 = 'Invalid Credentials';
        this.actionNameOne = {
          actionType: details.actionType,
          email: details.email,
          password: details.password,
        };
      }
    }
    // tslint:disable-next-line: typedef
    getActionNameTwo(details: LoginActions) {
      this.actionNameTwo = details;
    }
    // tslint:disable-next-line: typedef
    getActionNameThree(details: LoginActions) {
      this.actionNameThree = details;
    }
  
    registeredEmailIds = ['ramesh@gmail.com', 'rajeev@gmail.com', 'narend@gmail.com'];
    // tslint:disable-next-line: typedef
    getActionNameFour(details: LoginActions) {
      this.showLoginError2 = false;
      for (let email of this.registeredEmailIds) {
        if (email === details.email) {
          this.actionNameFour = details;
          this.showLoginError2 = false;
          this.loginErrorMessage2 = '';
          break;
        } else {
          this.showLoginError2 = true;
          this.loginErrorMessage2 = 'Email Id does not exist';
          this.actionNameFour = {
            actionType: details.actionType,
            email: details.email,
            password: details.password,
          };
        }
      }
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
