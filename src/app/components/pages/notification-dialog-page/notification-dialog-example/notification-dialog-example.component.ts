import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-dialog-example',
  templateUrl: './notification-dialog-example.component.html',
  styleUrls: ['./notification-dialog-example.component.scss']
})
export class NotificationDialogExampleComponent implements OnInit {

  actionName1: string;
  actionName2: string;

  successMessage1 = 'Password reset link has been send to your registered email id';
  successMessage2 = 'Password reset successful';

  errorMessage1 = 'Failed to sent Password reset link to your registered email id';
  errorMessage2 = 'The token has expired';

  btnText = 'CLICK HERE TO LOGIN';

  constructor() { }

  ngOnInit(): void { }

  getActionName1(actionName: string): void {
    this.actionName1 = actionName;
  }

  getActionName2(actionName: string): void {
    this.actionName2 = actionName;
  }

}
