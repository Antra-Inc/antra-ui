import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'antra-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  handleKeyUp(text: string) {
    this.notify.emit(text);
  }
}
