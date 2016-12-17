import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/gifts">Gifts</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
