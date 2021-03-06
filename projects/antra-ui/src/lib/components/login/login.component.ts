import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { LoginActions, LoginActionType } from '../../interfaces/login.interface';
import { Login } from '../../models/login.model';
import { CustomValidationService } from '../../services/custom-validation.service';

/**
 * `antra-login` component provides a default login interface with **email address field, password field** and
 * four **login actions** in which one is **FORGOT PASSWORD** link and rest 3 are buttons: **LOGIN button, GMAIL button
 * & OFFICE365 button**. Email address textbox does validations of required and valid email address.
 * Password textbox does validations of required.
 *
 * **Note:**
 * *Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number*
 *
 * There are two **Input properties,  emailAddressValidationMessage and passwordValidationMessage**, they are used to assign
 * custom validation messages to **email address field and password field** from end user.
 *
 * There is another **input property known as passwordPattern**, you can pass any custom pattern from application.
 * **For e.g:** [passwordPattern]='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', checks for 1 uppercase, 1 lowercase, 
 * 1 number and total length should be minimum 8 characters long.
 *
 * There is another **input property known as emailPattern**, you can pass any custom pattern from application.
 * **For e.g:** [emailPattern]='^[a-zA-Z0-9+_.-]+[@]?[a-zA-Z0-9.-]+$'.
 * Default pattern is '^[a-zA-Z0-9+_.-]+[@]?[a-zA-Z0-9.-]+$',
 * checks for **Alphanumeric characters, along with 0 or more special characters like '_','.'.
 * You can use 0 or 1 time '@' symbol .**
 *
 * There is another **input property known as emailPlaceHolder**, where you can provide placeholder for Email Address TextField.
 * Default value is 'User Name'. If you want to customize it to Email Address or any thing, then you can do that.
 *
 * There are another three **Input properties, such as loginUsingOption, loginUsingGmail and loginUsingOffice365**.
 * They set default to **false**, meaning they are invisible to user.
 *
 * If you apply **true**, then they will become **visible**.
 *
 * There is an **Output event** named loginActionEvent, it will emit login action names as a string such as **'FORGOTPASSWORD',
 * 'GMAIL' & 'OFFICE365'** based on end user clicks. It gives object of loginActions which includes actionType, email and password.
 *
 * **Note:**
 * When you click on LOGIN button, it will first validate provided email address and password and
 * then it will emit validated email address and password as the result.
 *
 * Based on the returned results of **login actions [FORGOT PASSWORD link, LOGIN button, GMAIL button & OFFICE365 button]**,
 * end user will implement their custom logic.
 *
 * **Note:**
 * There is an Input type, 'loginUsingOption' which will take boolean value. If it is false,
 * you will not be able to see Login Using option, it will hide Login using text, Gmail and Office365 buttons. Bydefault is true.
 *
 * **Note:**
 * There are two additional **Input properties, such as showLoginError, default to False and loginErrorMessage to show
 * variety of error messages based on login failures**. For Instance, Invalid Credentials, Emaild Id does not exist, etc
 *
 * Note: If you turn showLoginError to true, then loginErrorMessage will become visible.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
/**
 * Example of usage:
 * <example-url>https://antra-inc.github.io/Antra-ui/components/login</example-url>
 */
export class LoginComponent implements OnInit {
  // receiving customized validation messages from end user
  @Input() emailAddressValidationMessage;
  @Input() passwordValidationMessage;

  @Input() emailPlaceHolder = 'User Name';
  @Input() showLoginError = false;
  @Input() loginErrorMessage;
  @Input() passwordPattern = '';
  @Input() emailPattern = '^[a-zA-Z0-9+_.-]+[@]?[a-zA-Z0-9.-]+$';
  @Input() loginUsingOption = false;
  @Input() loginUsingGmail = false;
  @Input() loginUsingOffice365 = false;

  // emitting login actions to end user
  @Output() loginActionEvent = new EventEmitter<LoginActions>();

  loginModel = new Login();
  loginActions: LoginActions;

  errorMessage: string;
  /**
   * @ignore
   */
  constructor(private customValidationService: CustomValidationService) {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.loginActions = {
      actionType: 'Login',
      email: this.loginModel.email,
      password: this.loginModel.password,
    };
    this.loginActionEvent.emit(this.loginActions);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.customValidationService.passwordPattern = this.passwordPattern;
    this.customValidationService.emailPattern = this.emailPattern;
  }

  /**
   * @ignore
   */
  // tslint:disable-next-line: typedef
  sendLoginActionName(actionType: LoginActionType) {
    this.loginActions = {
      actionType,
      email: null,
      password: null,
    };
    this.loginActionEvent.emit(this.loginActions);
  }
}
