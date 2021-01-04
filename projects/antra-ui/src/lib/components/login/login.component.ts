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
 * There is an **Output event** named loginActionEvent, it will emit login action names as a string such as **'FORGOTPASSWORD',
 * 'GMAIL' & 'OFFICE365'** based on end user clicks.
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
 * <example-url>http://127.0.0.1:4200/components/login</example-url>
 */
export class LoginComponent implements OnInit {
  // receiving customized validation messages from end user
  @Input() emailAddressValidationMessage;
  @Input() passwordValidationMessage;
  // @Input() passwordPattern;
  @Input() loginUsingOption = false;
  @Input() loginUsingGmail = false;
  @Input() loginUsingOffice365 = false;

  // emitting login actions to end user
  @Output() loginActionEvent = new EventEmitter<string>();

  // loginActions = ['FORGOTPASSWORD', 'GMAIL', 'OFFICE365'];

  loginModel = new Login();

  loginActions: LoginActions;
  forgotPassword: LoginActionType = 'ForgotPassword';
  googleLogin: LoginActionType = 'GoogleLogin';
  msftLogin: LoginActionType = 'MsftLogin';

  /**
   * @ignore
   */
  constructor() {
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.loginActions = {
      actionType: 'Login',
      email: this.loginModel.email,
      password: this.loginModel.password,
    };
    this.loginActionEvent.emit(
      this.loginActions.actionType + ', ' + this.loginActions.email + ', ' + this.loginActions.password
    );
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    // console.log(this.passwordPattern);
    // this.customValidationService.passwordPattern = this.passwordPattern;
  }

  /**
   * @ignore
   */
  // tslint:disable-next-line: typedef
  sendLoginActionName(actionName: string) {
    this.loginActionEvent.emit(actionName);
  }
}
