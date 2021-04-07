import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
@Component({
  selector: 'app-homeSlide',
  templateUrl: './homeSlide.component.html',
  styleUrls: ['./homeSlide.component.scss']
})
export class HomeSlideComponent implements OnInit {

  constructor(public common: CommonService) { }
  activeSlide: boolean;
  videoStatusW: boolean;
  videoStatusE: boolean;
  config = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    // freeMode: true,
    parallax: true,
    slidesPerView: 1,
    pagination: {
      el: '.footer-nav',
      clickable: true,
      renderBullet: function (i, className) {
        if (i == 0) {
          return `<li class="${className}">Welcome</li>`;
        } else if (i == 1) {
          return '';
        } else if (i == 2) {
          return `<li class="${className}">Experience</li>`;
        } else if (i == 3) {
          return `<li class="${className}">Discover</li>`;
        } else if (i == 4) {
          return `<li class="${className}">YOUR VISIT</li>`;
        } else if (i == 5) {
          return `<li class="${className}">WHAT'S ON </li>`;
        } else if (i = 6) {
          return `<li class="${className}">Media</li>`
        }

      },
    },
  };
  ngOnInit() {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange(e) {
    console.log(e.activeIndex);
    if (e.activeIndex == 2) {
      this.activeSlide = true;
    } else if (e.activeIndex == 0) {
      this.videoStatusW = true

    } else if (e.activeIndex == 1) {
      this.videoStatusE = true
    }
  }
}
