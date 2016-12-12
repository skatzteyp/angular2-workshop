import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First {{name}} App!</h1>`,
})
export class AppComponent  { name = 'Angular'; }
