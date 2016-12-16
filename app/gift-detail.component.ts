import { Component, Input } from '@angular/core';

import { Gift } from './gift';

@Component({
  selector: 'gift-detail',
  templateUrl: './gift-detail.component.html'
})
export class GiftDetailComponent {
  @Input()
  gift: Gift;
}
