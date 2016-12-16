import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { GiftsComponent }  from './gifts.component';
import { GiftDetailComponent }  from './gift-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GiftDetailComponent,
    GiftsComponent
  ],
  bootstrap:    [ GiftsComponent ]
})
export class AppModule { }
