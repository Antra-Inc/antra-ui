import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss'],
})
export class WidgetPageComponent implements OnInit {
  htmlSource = `<div antraWidget [width]="'250'" [height]="'140'" [backgroundColor]="'#985633'"></div>
`;
  scssSource = ``;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-widget-example',
    templateUrl: './widget-example.component.html',
    styleUrls: ['./widget-example.component.scss']
  })
  export class WidgetExampleComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }
  }
  `;
  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}
}
