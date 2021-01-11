import { Component, OnInit } from '@angular/core';

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
