import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search-page',
  templateUrl: './global-search-page.component.html',
  styleUrls: ['./global-search-page.component.scss'],
})
export class GlobalSearchPageComponent implements OnInit {
  htmlSource = `
  <div class="example-content">
  <h4>Default Style:</h4>
  <antra-global-search></antra-global-search>
</div>
`;
  scssSource = `.example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-global-search-example',
    templateUrl: './global-search-example.component.html',
    styleUrls: ['./global-search-example.component.scss']
  })
  export class GlobalSearchExampleComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {
    }
  }
`;
  constructor() {}

  ngOnInit(): void {}
}
