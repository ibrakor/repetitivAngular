import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgifComponent} from "./components/ngif/ngif.component";
import { NgforComponent } from './components/ngfor/ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
