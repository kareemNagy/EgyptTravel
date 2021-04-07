import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-visit',
  templateUrl: './you-visit.component.html',
  styleUrls: ['./you-visit.component.scss']
})
export class YouVisitComponent implements OnInit {
  config = {
    slidesPerView: 1.36,
    autoHeight: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    speed: 2000,
    loop: true,
    navigation: {
      nextEl: '.visit-nav-next',
      prevEl: '.visit-nav-prev',
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
