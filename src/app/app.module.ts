import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search.service";
import {ShortenPipe} from "./shorten.pipe";






@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,


   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
