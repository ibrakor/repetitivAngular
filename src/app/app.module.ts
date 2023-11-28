import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgifComponent} from "./components/ngif/ngif.component";
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';


@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
