import { Component, OnInit } from '@angular/core';
import { LoginActions } from 'antra-ui/lib/interfaces/login.interface';

@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.scss'],
})
export class LoginExampleComponent implements OnInit {
  registeredEmailIds = ['ramesh@gmail.com', 'rajeev@gmail.com', 'john.smith','narend@gmail.com'];

  actionNameOne: LoginActions;
  actionNameTwo: LoginActions;
  actionNameThree: LoginActions;
  actionNameFour: LoginActions;

  loginErrorMessage1: string;
  showLoginError1 = false;

  loginErrorMessage2: string;
  showLoginError2 = false;

  emailPattern = '^[a-zA-Z0-9+_.-]+[@]?[a-zA-Z0-9.-]+$';

  passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
  passwordPattern1 = '^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$';

  loginUsingOption = false;
  loginUsingGmail = true;
  loginUsingOffice365 = true;

  emailAddressValidationMsg = ['Username or Email Address is required', 'Please Enter Valid Username or Email Address'];
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

  // tslint:disable-next-line: typedef
  getActionNameFour(details: LoginActions) {
    this.showLoginError2 = false;
    for (const email of this.registeredEmailIds) {
      if (email === details.email) {
        this.actionNameFour = details;
        this.showLoginError2 = false;
        this.loginErrorMessage2 = '';
        break;
      } else {
        this.showLoginError2 = true;
        this.loginErrorMessage2 = 'Username or Email Id does not exist';
        this.actionNameFour = {
          actionType: details.actionType,
          email: details.email,
          password: details.password,
        };
      }
    }
  }
}
