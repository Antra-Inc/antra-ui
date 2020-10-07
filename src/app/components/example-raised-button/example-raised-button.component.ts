import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-raised-button',
  templateUrl: './example-raised-button.component.html',
  styleUrls: ['./example-raised-button.component.scss'],
})
export class ExampleRaisedButtonComponent implements OnInit {

  htmlCode = `htmlCode`;
  cssCode = `cssCode`;
  tsCode = `tsCode`;

  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}

  getHtmlCode(event: string): void {
    this.htmlCode = event;
  }
  getTsCode(event: string): void {
    this.tsCode = event;
  }
  getCssCode(event: string): void {
    this.cssCode = event;
  }
}
