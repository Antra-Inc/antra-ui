import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.scss']
})
export class ProgressSpinnerPageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <antra-progress-spinner></antra-progress-spinner>
</div>`;
  scssSource = `  .example-content {
    padding: 10px 0;

    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-progress-spinner-example',
    templateUrl: './progress-spinner-example.component.html',
    styleUrls: ['./progress-spinner-example.component.scss']
  })
  export class ProgressSpinnerExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;
  constructor() { }

  ngOnInit(): void {
  }

}
