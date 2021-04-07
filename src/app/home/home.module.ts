import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HomeComponent } from './home.component';
import { WelcomeModule } from './components/welcome/welcome.module';
import { ExperienceModule } from './components/experience/experience.module';
import { DiscoverModule } from './components/discover/discover.module';
import { YouVisitModule } from './components/you-visit/you-visit.module';
import { MediaModule } from './components/media/media.module';
import { WhatsonModule } from './components/whatson/whatson.module';
import { PyramidModule } from './components/pyramid/pyramid.module';
import { FooterComponent } from '../shared/layouts/footer/footer.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    WelcomeModule,
    ExperienceModule,
    DiscoverModule,
    YouVisitModule,
    MediaModule,
    WhatsonModule,
    PyramidModule,

  ],
  declarations: [HomeComponent, FooterComponent],
  exports: [SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule { }
