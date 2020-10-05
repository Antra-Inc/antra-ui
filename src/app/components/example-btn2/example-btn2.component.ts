import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { slideToRight } from '../anims/router.anim';

@Component({
  selector: 'app-example-btn2',
  templateUrl: './example-btn2.component.html',
  styleUrls: ['./example-btn2.component.scss'],
  animations: [ slideToRight ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleBtn2Component implements OnInit {

  @HostBinding('@routeAnim') state;

  constructor() { }

  ngOnInit(): void {
  }

}
