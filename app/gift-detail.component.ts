import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }  from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Gift } from './gift';
import { GiftService } from './gift.service';

@Component({
  selector: 'gift-detail',
  templateUrl: './gift-detail.component.html'
})
export class GiftDetailComponent implements OnInit {
  @Input()
  gift: Gift;

  constructor(private giftService: GiftService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gift = this.giftService.getGift(params['id']);
    });
  }
}
