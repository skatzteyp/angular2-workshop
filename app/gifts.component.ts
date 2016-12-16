import { Component, OnInit } from '@angular/core';

import { Gift } from './gift';
import { GiftService } from './gift.service';

@Component({
  selector: 'gifts',
  templateUrl: './gifts.component.html',
  providers: [
    GiftService
  ]
})
export class GiftsComponent implements OnInit {
  title = 'Santa\'s List';
  currentGift: Gift;
  gifts: Gift[];

  constructor(private giftService: GiftService) {
  }

  getGifts(): Promise<Gift[]> {
    return this.giftService.getGifts();
  }

  ngOnInit(): void {
    this.getGifts().then((gifts) => {
      this.gifts = gifts;
    });
  }

  editGift(gift: Gift) {
    this.currentGift = gift;
  }

  deleteGift(index: number) {
    this.gifts.splice(index, 1);
  }
}
