import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureModule } from './culture/culture.module';
import { HomeModule } from './home/home.module';
import { KidsModule } from './kids/kids.module';
import { LeisureModule } from './leisure/leisure.module';

import { HeaderComponent } from './shared/layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CultureModule,
    LeisureModule,
    KidsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
