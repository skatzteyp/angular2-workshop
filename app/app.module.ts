import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { GiftListComponent }  from './gift-list.component';
import { GiftDetailComponent }  from './gift-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    GiftDetailComponent,
    GiftListComponent
  ],
  bootstrap:    [ GiftListComponent ]
})
export class AppModule { }
