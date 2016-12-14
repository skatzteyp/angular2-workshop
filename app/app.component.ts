import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My New {{name}} App!</h1>`,
})
export class AppComponent  { name = 'Angular2'; }
