import { Injectable } from '@angular/core'

import { Gift } from './gift';

@Injectable()
export class GiftService {
  getGifts(): Promise<Gift[]> {
    return Promise.resolve([
      new Gift(1, 'Wallet', 'Father'),
      new Gift(2, 'Apron', 'Mother'),
      new Gift(3, 'Ball', 'Brother'),
      new Gift(4, 'Bag', 'Sister'),
      new Gift(5, 'Eyeglass', 'Grandpa'),
    ]);
  }
}
