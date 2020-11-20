import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.scss']
})
export class LoginExampleComponent implements OnInit {

  actionName: string;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getActionName(actionName: string) {
    this.actionName = actionName;
  }
}
