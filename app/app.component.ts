import { Component } from '@angular/core';

@Component({
  selector: 'gift-list',
  template: `
    <h1>{{title}}</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Receiver</th>
        <th>Delivered</th>
        <th></th>
      </tr>
      <tr *ngFor="let gift of gifts">
        <td>{{gift.name}}</td>
        <td>{{gift.receiver}}</td>
        <td><input type="checkbox" checked="{{gift.delivered}}" /></td>
        <td><button>Naughty?</button></td>
        <td><button>Edit</button></td>
      </tr>
    </table>
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
