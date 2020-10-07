import { Component, Input, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-example-wrapper',
  templateUrl: './example-wrapper.component.html',
  styleUrls: ['./example-wrapper.component.scss'],
})
export class ExampleWrapperComponent implements OnInit {
  response: HighlightResult;

  @Input() hCode = `htmlCode`;
  @Input() cCode = `cssCode`;
  @Input() tCode = `tsCode`;

  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() { }

}
