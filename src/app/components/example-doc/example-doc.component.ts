import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-doc',
  templateUrl: './example-doc.component.html',
  styleUrls: ['./example-doc.component.scss'],
})
export class ExampleDocComponent implements OnInit {
  @Input() htmlSource = `htmlSource`;
  @Input() scssSource = `scssSource`;
  @Input() tsSource = `tsSource`;

  constructor() {}

  ngOnInit(): void {}
}
