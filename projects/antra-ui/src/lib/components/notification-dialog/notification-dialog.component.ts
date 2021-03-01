import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * `antra-notification-dialog` component provides a default notification dialog box interface through 
 * which you can show Success message or Error message to the end user. This dialog box interface also contains
 * the **success-icon, error-icon, message and optional button to redirect to another component**.
 *
 * There are several **Input properties** defined for this component. **Input property,  successMessage**, it is used to receive successful
 * message from end user after we succeed with any operation. **For instance,** response we get on api call. 
 * 
 * **Input property,  errorMessage**, it is used to 
 * receive error message from end user incase of any error during any intended operation.
 * 
 * **Input property,  notificationStatus**, it will hold boolean value. On true value, you will get Success Icon with optional
 * success message and redirect button. On false value, you will get Error Icon with optional error message and redirect button. 
 * Defaults to true.
 * 
 * **Input property,  btnText**, it is used to apply user friendly text to button from the end user.
 *
 * **NOTE:**  **Input property,  showRedirectButton**, it is set default to **false**,
 * meaning button is invisible to user. If you apply **true**, then it will become **visible**.
 *
 * There is an **Output event** named sendNotificationEvent, on click
 * of **CLICK HERE TO LOGIN** button, it will emit btnText input property value as as string. **For instance,** you have defined a button 
 * with value as **CLICK HERE TO LOGIN**, it will emit it's value as string to the end user on click of this button. 
 *
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss'],
})
/**
 * Example of usage:
 * <example-url>https://antra-inc.github.io/Antra-ui/components/notification-dialog</example-url>
 */
export class NotificationDialogComponent implements OnInit {
  @Input() successMessage = 'Password reset successful';
  @Input() btnText = 'CLICK HERE TO LOGIN';
  @Input() showRedirectButton = false;
  @Input() notificationStatus = true;
  @Input() errorMessage = '';

  // emitting sendNotificationEvent SUBMIT action to end user
  @Output() sendNotificationEvent = new EventEmitter<string>();

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.sendNotificationEvent.emit(this.btnText);
  }
}
