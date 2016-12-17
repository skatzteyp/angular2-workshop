import { Injectable } from '@angular/core'

import { Gift } from './gift';

@Injectable()
export class GiftService {
  gifts: Gift[] = [
      new Gift(0, 'Shoes', 'Baby'),
      new Gift(1, 'Wallet', 'Father'),
      new Gift(2, 'Apron', 'Mother'),
      new Gift(3, 'Ball', 'Brother'),
      new Gift(4, 'Bag', 'Sister'),
      new Gift(5, 'Eyeglass', 'Grandpa'),
  ]
  getGifts(): Promise<Gift[]> {
    return Promise.resolve(this.gifts);
  }

  getGift(id: number): Gift {
    return this.gifts[id];
  }

  deleteGift(id: number) {
    this.gifts.splice(id, 1);
  }
}
