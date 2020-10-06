import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-example-button',
  templateUrl: './example-button.component.html',
  styleUrls: ['./example-button.component.scss'],
})
export class ExampleButtonComponent implements OnInit {

  htmlContent = ``;
  response: HighlightResult;

  htmlCode = `<antra-button btnColor="primary" btnText="primary"></antra-button>
<antra-button btnColor="accent" btnText="accent"></antra-button>
<antra-button btnColor="warn" btnText="warn"></antra-button>
<antra-button btnColor="error" btnText="error"></antra-button>
<antra-button disabled btnText="disabled"></antra-button>`;
  cssCode = `cssCode`;
  tsCode = `tsCode`;


  constructor() { }

  ngOnInit(): void { }

}
