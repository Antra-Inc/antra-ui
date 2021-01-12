import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasswordResetActions } from '../../interfaces/password-reset.interface';
import { Login } from '../../models/login.model';

/**
 * `antra-change-password` component provides a default Change Password interface with two fields such as **password field, confirm password field** and
 * one **SUBMIT** button. Password textbox does validations of required and strong password pattern where as Confirm Password textbox does validations of required and matches with password textbox value.
 *
 * There are three **Input properties,  emailAddress, passwordValidationMessage and confirmPasswordValidationMessage**, They are used to assign
 * custom validation messages to **password and confirm password field** from end user. Input property, email address will hold the current email address for which user wishes to update the password.
 *
 * * There is another input property known as **passwordPattern**, you can pass any custom pattern from application.
 * **For e.g:** [passwordPattern]='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'.
 * Default pattern is '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
 * checks for **1 uppercase, 1 lowercase, 1 number and total length should be minimum 8 characters long.**
 *
 * There is an **Output event** named passwordResetActionEvent, on click of **SUBMIT** button, it will emit object of passwordResetActions which includes submit action name as a string **'ChangePassword action type, email address, password and confirm password **.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/change-password</example-url>
 */
export class ChangePasswordComponent implements OnInit {
  // receiving customized validation messages from end user
  @Input() emailAddress;
  @Input() passwordValidationMessage;
  @Input() confirmPasswordValidationMessage;
  @Input() passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  // emitting password-reset SUBMIT action to end user
  @Output() passwordResetActionEvent = new EventEmitter<PasswordResetActions>();

  loginModel = new Login();
  passwordResetActions: PasswordResetActions;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.loginModel.email = this.emailAddress;

    this.passwordResetActions = {
      actionType: 'ChangePassword',
      email: this.loginModel.email,
      password: this.loginModel.password,
      confirmPassword: this.loginModel.confirmPassword,
    };
    this.passwordResetActionEvent.emit(this.passwordResetActions);
    console.log(this.passwordResetActions.actionType, ' ', this.passwordResetActions.email);
    console.log(this.passwordResetActions.password, ' ', this.passwordResetActions.confirmPassword);
  }
}
