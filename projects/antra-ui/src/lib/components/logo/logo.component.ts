import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'antra-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() logoPath = '/assets/svg/logo.svg';

  // tslint:disable-next-line: typedef
  constructor() {}

  ngOnInit(): void {}
}
