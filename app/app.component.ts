import { Component } from '@angular/core';

@Component({
  selector: 'gift-list',
  template: `
    <h1>{{title}}</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Receiver</th>
        <th></th>
      </tr>
      <tr *ngFor="let gift of gifts">
        <td>{{gift.name}}</td>
        <td>{{gift.receiver}}</td>
        <td><button (click)="onSelect(gift)">Edit</button></td>
      </tr>
    </table>
    <div>
      <h2>Gift Details:</h2>
      <div>Name: <input [(ngModel)]="currentGift.name" /></div>
      <div>Receiver: <input [(ngModel)]="currentGift.receiver" /></div>
    </div>
  `,
})
export class AppComponent {
  title = 'Santa\'s List';
  currentGift: Gift = { };

  gifts: Gifts[] = [
    new Gift(1, 'Wallet', 'Father'),
    new Gift(2, 'Apron', 'Mother'),
    new Gift(3, 'Ball', 'Brother'),
    new Gift(4, 'Bag', 'Sister'),
    new Gift(5, 'Eyeglass', 'Grandpa'),
  ];

  onSelect(gift: Gift) {
    this.currentGift = gift;
  }
}

export class Gift {
  constructor( public id: number, public name: string, public receiver: string) {
    }
}
