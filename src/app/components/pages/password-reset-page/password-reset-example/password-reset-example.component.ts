import { Component, OnInit } from '@angular/core';
import { PasswordResetActions } from 'antra-ui/lib/interfaces/password-reset.interface';

@Component({
  selector: 'app-password-reset-example',
  templateUrl: './password-reset-example.component.html',
  styleUrls: ['./password-reset-example.component.scss'],
})
export class PasswordResetExampleComponent implements OnInit {
  passwordResetActions: PasswordResetActions;
  details2: string;

  loginErrorMessage: string;
  showLoginError = false;

  emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];

  constructor() {}

  ngOnInit(): void {}

  registeredEmailIds = ['ramesh@gmail.com', 'rajeev@gmail.com', 'narend@gmail.com'];
  // tslint:disable-next-line: typedef
  sendVerificationEmail1(pwdResetActions: PasswordResetActions) {
    this.showLoginError = false;
    for (let email of this.registeredEmailIds) {
      if (email === pwdResetActions.email) {
        this.passwordResetActions = pwdResetActions;
        this.showLoginError = false;
        this.loginErrorMessage = '';
        break;
      } else {
        this.showLoginError = true;
        this.loginErrorMessage = 'Email Id does not exist';
        this.passwordResetActions = {
          actionType: pwdResetActions.actionType,
          email: pwdResetActions.email,
          password: pwdResetActions.password,
          confirmPassword: pwdResetActions.confirmPassword,
        };
      }
    }
  }
  // tslint:disable-next-line: typedef
  sendVerificationEmail2(details2: string) {
    this.details2 = details2;
  }
}
