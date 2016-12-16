import { Component } from '@angular/core';

@Component({
  selector: 'gift-list',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let gift of gifts">
        {{gift.name}}
      </li>
    </ul>
  `,
})
export class AppComponent {
  title = 'Santa\'s List';

  gifts = [
    new Gift(1, 'Wallet', 'Father'),
    new Gift(2, 'Apron', 'Mother'),
    new Gift(3, 'Ball', 'Brother'),
    new Gift(4, 'Bag', 'Sister'),
    new Gift(5, 'Eyeglass', 'Grandpa'),
  ];
}

export class Gift {
  constructor(public id: number,
    public name: string,
    public receiver: string) { }
}
