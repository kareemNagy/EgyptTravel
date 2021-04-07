import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  constructor() { }
  configOne = {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 'auto',
    spaceBetween: 100,
    pagination: {
      el: '.pr-item-one',
      type: 'progressbar',
    },
  };
  ngOnInit() {
  }

}
