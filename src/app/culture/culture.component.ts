import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {

  constructor() { }
  configOne = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1.5,
    spaceBetween: 80,
    pagination: {
      el: '.pr-item-one',
      type: 'progressbar',
    },
  };

  configTwo = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1.5,
    spaceBetween: 80,
    pagination: {
      el: '.pr-item-two',
      type: 'progressbar',
    },
  };

  configThree = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1.5,
    spaceBetween: 80,
    pagination: {
      el: '.pr-item-three',
      type: 'progressbar',
    },
  };
  ngOnInit() {
  }

}
