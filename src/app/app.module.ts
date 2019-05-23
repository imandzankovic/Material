import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
