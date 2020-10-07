import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-raised-button-doc',
  templateUrl: './raised-button-doc.component.html',
  styleUrls: ['./raised-button-doc.component.scss']
})
export class TestwrapperComponent implements OnInit {

  @Output() htmlCode = new EventEmitter<string>();
  @Output() tsCode = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.htmlCode.emit(`    <antra-raised-button btnColor="primary" btnText="primary"></antra-raised-button>
    <antra-raised-button btnColor="accent" btnText="accent"></antra-raised-button>
    <antra-raised-button btnColor="warn" btnText="warn"></antra-raised-button>
    <antra-raised-button btnColor="error" btnText="error"></antra-raised-button>
    <antra-raised-button disabled btnText="disabled"></antra-raised-button>`);

    this.tsCode.emit(`    import { Component } from '@angular/core';

    @Component({
      selector: 'app-testwrapper',
      templateUrl: './testwrapper.component.html',
      styleUrls: ['./testwrapper.component.scss']
    })
    export class TestwrapperComponent implements OnInit {

      constructor() { }

      ngOnInit(): void { }
    }`);

  }

}
