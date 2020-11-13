import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-page',
  templateUrl: './widget-page.component.html',
  styleUrls: ['./widget-page.component.scss'],
})
export class WidgetPageComponent implements OnInit {
  htmlSource = `<div class="container">
  <article antraWidget class="widget1">
    <p>customize style with className</p>
  </article>
  <article antraWidget style="height: 140px; width: 300px; background-color: #856400">
    <p>customize style with style attribute</p>
  </article>
  <article antraWidget style="height: 220px; width: 220px; display: flex; flex-wrap: wrap">
    <div antraWidget style="width: 80px; height: 80px; background-color: bisque">nested widgets</div>
    <div antraWidget style="width: 80px; height: 80px; background-color: bisque"></div>
    <div antraWidget style="width: 80px; height: 80px; background-color: bisque"></div>
    <div antraWidget style="width: 80px; height: 80px; background-color: bisque"></div>
  </article>
</div>`;
  scssSource = `  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .widget1 {
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }`;
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
