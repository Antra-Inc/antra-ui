import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input-box-page',
  templateUrl: './search-input-box-page.component.html',
  styleUrls: ['./search-input-box-page.component.scss']
})
export class SearchInputBoxPageComponent implements OnInit {
  htmlSource = `
  <div class="example-content">
  <h4>Default Style:</h4>
  <antra-search-input-box></antra-search-input-box>
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
    selector: 'app-search-input-box-example',
    templateUrl: './search-input-box-example.component.html',
    styleUrls: ['./search-input-box-example.component.scss']
  })
  export class SearchInputBoxExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;
  constructor() { }

  ngOnInit(): void {
  }

}
