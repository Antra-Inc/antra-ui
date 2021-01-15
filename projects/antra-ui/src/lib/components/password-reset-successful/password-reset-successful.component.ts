import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * `antra-password-reset-successful` component provides a default Password Reset Successful 
 * interface with **success-icon, message and optional button to redirect to another 
 * component** and
 *
 * There is one **Input property,  successfulMessage**, it is used to receive successful 
 * message from end user after password reset operation becomes successful.
 * There is one more **Input property,  btnText**, it is used to apply user friendly text 
 * to button from end user.
 *
 * **NOTE:**  **Input property,  showRedirectButton**, it is set default to **false**, 
 * meaning button is invisible to user. If you apply **true**, then it will become **visible**.
 *
 * There is an **Output event** named passwordResetSuccessfulEvent, on click 
 * of **CLICK HERE TO LOGIN** button, it will emit submit action name as 
 * a string **CLICK_HERE_TO_LOGIN**.
 *
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-password-reset-successful',
  templateUrl: './password-reset-successful.component.html',
  styleUrls: ['./password-reset-successful.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/password-reset-successful</example-url>
 */
export class PasswordResetSuccessfulComponent implements OnInit {
  @Input() successfulMessage = 'Password reset successful';
  @Input() btnText = 'CLICK HERE TO LOGIN';
  @Input() showRedirectButton = false;

  // emitting passwordResetSuccessfulEvent SUBMIT action to end user
  @Output() passwordResetSuccessfulEvent = new EventEmitter<string>();

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
    this.passwordResetSuccessfulEvent.emit('CLICK_HERE_TO_LOGIN');
  }
}
