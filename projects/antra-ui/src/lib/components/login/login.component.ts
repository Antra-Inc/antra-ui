import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.model';

/**
 * `antra-login` component provides a default login interface with email address and password textboxes.
 * Email address textbox does validations of required and valid email address. Password textbox does validations of required.
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
  loginModel = new Login();

  /**
   * @ignore
   */
  constructor() {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    alert('Your Login is successfully done ..!!!');
    console.table(this.loginModel);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
