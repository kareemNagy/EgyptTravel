import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
  configFour = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1.5,
    spaceBetween: 80,
    pagination: {
      el: '.pr-item-four',
      type: 'progressbar',
    },
  };
  configFive = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1.5,
    spaceBetween: 80,
    pagination: {
      el: '.pr-item-five',
      type: 'progressbar',
    },
  };
}
