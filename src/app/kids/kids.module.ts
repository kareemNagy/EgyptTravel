import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [KidsComponent],
  exports: [KidsComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class KidsModule { }
