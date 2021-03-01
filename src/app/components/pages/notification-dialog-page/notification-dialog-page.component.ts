import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-dialog-page',
  templateUrl: './notification-dialog-page.component.html',
  styleUrls: ['./notification-dialog-page.component.scss']
})
export class NotificationDialogPageComponent implements OnInit {

  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <h3>Example 1</h3>
        <antra-notification-dialog class="default" [notificationStatus]="true" [successMessage]="successMessage1">
        </antra-notification-dialog>
      </td>
      <td>
        <h3>Example 2</h3>
        <antra-notification-dialog class="customized" [notificationStatus]="true" [btnText]="btnText"
          [showRedirectButton]="true" [successMessage]="successMessage2"
          (sendNotificationEvent)="getActionName1($event)">
        </antra-notification-dialog>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <hr />
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <h3 class="text-center">
          {{ actionName1 }}
        </h3>
      </td>
    </tr>
    <tr>
      <td>
        <h3>Example 3</h3>
        <antra-notification-dialog class="default" [notificationStatus]="false" [errorMessage]="errorMessage1">
        </antra-notification-dialog>
      </td>
      <td>
        <h3>Example 4</h3>
        <antra-notification-dialog class="default" [notificationStatus]="false" [showRedirectButton]="true"
          btnText="BACK TO LOGIN" [errorMessage]="errorMessage2" (sendNotificationEvent)="getActionName2($event)">
        </antra-notification-dialog>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <hr />
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <h3 class="text-center">
          {{ actionName2 }}
        </h3>
      </td>
    </tr>
  </table>
</div>
`;
  scssSource = `.example-content {
    padding: 10px 0;
  
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .text-center {
    text-align: center;
  }  
`;

  tsSource = `import { Component, OnInit } from '@angular/core';

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
`;

  constructor() { }

  ngOnInit(): void { }
}
