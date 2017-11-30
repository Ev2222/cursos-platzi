import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"


import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAu6fWdwU5IxXJNqUu-bnX0I4_JubWRCWo'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
