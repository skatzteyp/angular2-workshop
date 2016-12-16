import { Component } from '@angular/core';

import { Gift } from './gift';

@Component({
  selector: 'gift-list',
  templateUrl: './gift-list.component.html'
})
export class GiftListComponent {
  title = 'Santa\'s List';
  currentGift: Gift;

  gifts: Gift[] = [
    new Gift(1, 'Wallet', 'Father'),
    new Gift(2, 'Apron', 'Mother'),
    new Gift(3, 'Ball', 'Brother'),
    new Gift(4, 'Bag', 'Sister'),
    new Gift(5, 'Eyeglass', 'Grandpa'),
  ];

  editGift(gift: Gift) {
    this.currentGift = gift;
  }

  deleteGift(index: number) {
    this.gifts.splice(index, 1);
  }
}
