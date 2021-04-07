import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureModule } from './culture/culture.module';
import { HomeModule } from './home/home.module';
import { HomeSlideModule } from './homeSlide/homeSlide.module';
import { KidsModule } from './kids/kids.module';
import { LeisureModule } from './leisure/leisure.module';
import { HeaderModule } from './shared/layouts/header/header.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CultureModule,
    LeisureModule,
    KidsModule,
    HeaderModule,
    HomeSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
