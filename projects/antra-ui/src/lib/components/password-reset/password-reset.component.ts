import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasswordResetActions } from '../../interfaces/password-reset.interface';
import { Login } from '../../models/login.model';

/**
 * `antra-password-reset` component provides a default Password Reset interface 
 * with **email address field** and one **SUBMIT** button. Email address textbox does 
 * validations of required and valid email address.
 *
 * There is one **Input property,  emailAddressValidationMessage**, it is used to assign
 * custom validation message to **email address field** from end user.
 *
 * There is an **Output event** named passwordResetActionEvent, on click of **SUBMIT** button, 
 * it will emit object of passwordResetActions which includes submit action name as a 
 * string **'PasswordReset and email address**.
 *
 * **Note:**
 * When you click on SUBMIT button, it will first validate provided email address and
 * then it will emit validated email address as the result plus PasswordReset as action string.
 *
 * * **Note:**
 * There are two additional **Input properties, such as showLoginError, default to False and loginErrorMessage to show
 * variety of error messages based on submit button clicks**. For Instance, Inactive Email Address, Emaild Id does not exist, etc
 *
 * Note: If you turn showLoginError to true, then loginErrorMessage will become visible. 
 * 
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/password-reset</example-url>
 */
export class PasswordResetComponent implements OnInit {
  // receiving customized validation messages from end user
  @Input() emailAddressValidationMessage;

  @Input() showLoginError = false;
  @Input() loginErrorMessage;
  
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
    this.passwordResetActions = {
      actionType: 'PasswordReset',
      email: this.loginModel.email,
      password: null,
      confirmPassword: null,
    };
    this.passwordResetActionEvent.emit(this.passwordResetActions);
  }
}
