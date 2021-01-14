import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-example',
  templateUrl: './change-password-example.component.html',
  styleUrls: ['./change-password-example.component.scss'],
})
export class ChangePasswordExampleComponent implements OnInit {
  details1: string;
  details2: string;

  userName1 = 'John Smith';
  userName2 = 'William Smith';

  emailAddress1 = 'narend.gentyal@gmail.com';
  emailAddress2 = 'narend.atsinfotech@gmail.com';

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
