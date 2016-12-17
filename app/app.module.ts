import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { GiftsComponent }  from './gifts.component';
import { GiftDetailComponent }  from './gift-detail.component';

import { GiftService }   from './gift.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'gifts',
        component: GiftsComponent
      },
      {
        path: 'gifts/:id',
        component: GiftDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    GiftDetailComponent,
    GiftsComponent
  ],
  providers: [
    GiftService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
