import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  @Input() activeSlide: boolean;
  @Input() cairoMap: boolean = false;
  @Input() map: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleMapC() {
    this.cairoMap = true;
    this.map = false;
  }
  toggleMapM() {
    this.cairoMap = false;
    this.map = true;
  }
}
