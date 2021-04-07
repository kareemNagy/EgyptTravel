import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  covid: boolean = true;
  menu: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleCovid() {
    this.covid = false;
  }
  toggleMenu() {
    this.menu = !this.menu;
  }


}
