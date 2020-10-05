import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { slideToRight } from '../anims/router.anim';

@Component({
  selector: 'app-example-button',
  templateUrl: './example-button.component.html',
  styleUrls: ['./example-button.component.scss'],
  animations: [ slideToRight ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleButtonComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  constructor() { }

  ngOnInit(): void {
  }

}