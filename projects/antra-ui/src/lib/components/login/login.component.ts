import { Component, EventEmitter, OnInit, Output, ɵConsole } from '@angular/core';
import { Login } from '../../models/login.model';

/**
 * `antra-login` component provides a default login interface with email address and password textboxes.
 * Email address textbox does validations of required and valid email address. Password textbox does validations of required.
 *
 * Note:
 * Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number
 *
 * There is Output event named clickEvent, it will captureto end user action name.
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
  @Output() clickEvent = new EventEmitter<string>();

  loginModel = new Login();
  emailAddressValidationMessage = ['Email Address is required', 'Please Enter Valid Email Address'];
  passwordValidationMessage = [
    'Password is required',
    'Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number',
  ];
  /**
   * @ignore
   */
  constructor() {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    // alert('Your Login is successfully done ..!!!');
    // console.table(this.loginModel);
    this.clickEvent.emit(this.loginModel.email + ',' + this.loginModel.password);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  // tslint:disable-next-line: typedef
  sendActionName(actionName: string) {
    this.clickEvent.emit(actionName);
  }
}
