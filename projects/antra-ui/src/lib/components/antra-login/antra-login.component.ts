import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.model';

@Component({
  selector: 'antra-login',
  templateUrl: './antra-login.component.html',
  styleUrls: ['./antra-login.component.css'],
})
export class AntraLoginComponent implements OnInit {
  loginModel = new Login();

  constructor() {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.loginModel);
  }

  ngOnInit(): void {}
}
