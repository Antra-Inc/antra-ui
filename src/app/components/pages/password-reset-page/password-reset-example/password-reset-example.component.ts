import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-example',
  templateUrl: './password-reset-example.component.html',
  styleUrls: ['./password-reset-example.component.scss'],
})
export class PasswordResetExampleComponent implements OnInit {
  details1: string;
  details2: string;

  emailAddressValidationMsg = ['Email Address is required', 'Please Enter Valid Email Address'];

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  sendVerificationEmail1(details1: string) {
    this.details1 = details1;
  }
  sendVerificationEmail2(details2: string) {
    this.details2 = details2;
  }
}
