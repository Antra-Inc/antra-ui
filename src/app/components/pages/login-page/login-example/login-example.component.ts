import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.scss'],
})
export class LoginExampleComponent implements OnInit {
  actionNameOne: string;
  actionNameTwo: string;
  loginUsingOption = false;

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
}
