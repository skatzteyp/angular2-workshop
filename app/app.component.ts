import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{gift.name}} Details</h2>
    <div>ID: {{gift.id}}</div>
    <div>Name: {{gift.name}} <input [(ngModel)]="gift.name" placeholder="Name" /></div>
    <div>Receiver: {{gift.receiver}} <input [(ngModel)]="gift.receiver" placeholder="Receiver" /></div>
  `,
})
export class AppComponent  {
  title = 'Santa\'s List';

  gift = { id: 1, name: 'Wallet', receiver: 'Father' };
}

export class Gift {
  name: string;
  receiver: string;
}
