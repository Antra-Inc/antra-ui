import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-successful-example',
  templateUrl: './password-reset-successful-example.component.html',
  styleUrls: ['./password-reset-successful-example.component.scss'],
})
export class PasswordResetSuccessfulExampleComponent implements OnInit {
  details: string;

  successfulMessage1 = 'Password reset link has been send to your registered email id';
  successfulMessage2 = 'Password reset successful';

  btnText = 'CLICK HERE TO LOGIN';

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  showActionDetails(details: string) {
    this.details = details;
  }
}
