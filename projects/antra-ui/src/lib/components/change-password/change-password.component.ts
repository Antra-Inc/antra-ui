import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasswordResetActions } from '../../interfaces/password-reset.interface';
import { ResetPasswordModel } from '../../models/reset-password.model';
import { CustomValidationService } from '../../services/custom-validation.service';

/**
 * `antra-change-password` component provides a default Change Password interface
 * with two fields such as **password field, confirm password field** and
 * one **SUBMIT** button. Password textbox does validations of required
 * and strong password pattern where as Confirm Password textbox does validations
 * of required and matches with password textbox value.
 *
 * There are four **Input properties, passwordValidationMessage and
 * confirmPasswordValidationMessage**, They are used to assign
 * custom validation messages to **password and confirm password field**
 * from end user where as **Input properties, userName and email address** will hold
 * the user who has logged-in whose user name and email address for which user wishes
 * to update the password.
 *
 * * There is another input property known as **passwordPattern**, you can pass any
 * custom pattern from application.
 * * For e.g: **[passwordPattern]='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'**.
 * Default pattern is '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', checks for 1 uppercase,
 * 1 lowercase, 1 number and total length should be minimum 8 characters long.
 *
 * There is an **Output event** named passwordResetActionEvent, on click of **SUBMIT** button,
 * it will emit object of passwordResetActions which includes submit action name as a
 * string **ChangePassword [action type], email address,
 * password and confirm password**
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
  @Input() userName;
  @Input() emailAddress;
  // receiving customized validation messages from end user
  @Input() passwordValidationMessage;
  @Input() confirmPasswordValidationMessage;
  @Input() passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

  // emitting passwordResetActionEvent SUBMIT action to end user
  @Output() passwordResetActionEvent = new EventEmitter<PasswordResetActions>();

  resetPwdModel = new ResetPasswordModel();
  passwordResetActions: PasswordResetActions;

  /**
   * @ignore
   */
  constructor(private customValidationService: CustomValidationService) {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.customValidationService.passwordPattern = this.passwordPattern;
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.resetPwdModel.email = this.emailAddress;

    this.passwordResetActions = {
      actionType: 'ChangePassword',
      email: this.resetPwdModel.email,
      password: this.resetPwdModel.password,
      confirmPassword: this.resetPwdModel.confirmPassword,
    };
    this.passwordResetActionEvent.emit(this.passwordResetActions);
  }
}
