import { Component, OnInit } from '@angular/core';

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
