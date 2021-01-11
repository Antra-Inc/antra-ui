import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-page',
  templateUrl: './password-reset-page.component.html',
  styleUrls: ['./password-reset-page.component.scss'],
})
export class PasswordResetPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <table>
    <tr>
      <td>
        <antra-password-reset
          class="default"
          [emailAddressValidationMessage]="emailAddressValidationMsg"
          (passwordResetActionEvent)="sendVerificationEmail($event)"
        ></antra-password-reset>
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <hr />
      </td>
    </tr>
    <tr>
      <td>
        <h2 class="text-center">
          {{ details }}
        </h2>
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
    selector: 'app-password-reset-example',
    templateUrl: './password-reset-example.component.html',
    styleUrls: ['./password-reset-example.component.scss'],
  })
  export class PasswordResetExampleComponent implements OnInit {
    details: string;
  
    emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // tslint:disable-next-line: typedef
    sendVerificationEmail(details: string) {
      this.details = details;
    }
  }  
`;

  constructor() {}

  ngOnInit(): void {}
}
