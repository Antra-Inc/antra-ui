import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-example-raised-button',
  templateUrl: './example-raised-button.component.html',
  styleUrls: ['./example-raised-button.component.scss'],
})
export class ExampleRaisedButtonComponent implements OnInit {
  response: HighlightResult;

  code = `<antra-raised-button btnColor="primary" btnText="primary"></antra-raised-button>
<antra-raised-button btnColor="accent" btnText="accent"></antra-raised-button>
<antra-raised-button btnColor="warn" btnText="warn"></antra-raised-button>
<antra-raised-button btnColor="error" btnText="error"></antra-raised-button>
<antra-raised-button disabled btnText="disabled"></antra-raised-button>`;
  cssCode = `cssCode`;
  tsCode = `tsCode`;

  constructor() {}

  ngOnInit() {}
}
