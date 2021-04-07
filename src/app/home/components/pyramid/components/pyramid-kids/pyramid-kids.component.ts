import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid-kids',
  templateUrl: './pyramid-kids.component.html',
  styleUrls: ['./pyramid-kids.component.scss']
})
export class PyramidKidsComponent implements OnInit {
  @Input() visibility: boolean;
  constructor() { }

  ngOnInit() {
  }

}
