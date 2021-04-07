import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';


import { FooterComponent } from '../shared/layouts/footer/footer.component';
import { HomeSlideComponent } from './homeSlide.component';
import { DiscoverModule } from '../home/components/discover/discover.module';
import { ExperienceModule } from '../home/components/experience/experience.module';
import { MediaModule } from '../home/components/media/media.module';
import { PyramidModule } from '../home/components/pyramid/pyramid.module';
import { WelcomeModule } from '../home/components/welcome/welcome.module';
import { WhatsonModule } from '../home/components/whatson/whatson.module';
import { YouVisitModule } from '../home/components/you-visit/you-visit.module';
import { FooterModule } from '../shared/layouts/footer/footer.module';


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
    FooterModule,
  ],
  declarations: [HomeSlideComponent],
  exports: [SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeSlideModule { }
