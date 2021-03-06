import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContentComponent} from "./content/content.component.";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {FirstComponent} from "./content/first/first.component";
import {SecondComponent} from "./content/second/second.component";
import {FhirdComponent} from "./content/third/third";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    FhirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
