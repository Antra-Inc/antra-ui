import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.model';

@Component({
  selector: 'antra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/login</example-url>
 */
export class LoginComponent implements OnInit {

  loginModel = new Login();

  constructor() {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    alert('Your Login is successfully done ..!!!');
    console.table(this.loginModel);
  }

  ngOnInit(): void {}
}
