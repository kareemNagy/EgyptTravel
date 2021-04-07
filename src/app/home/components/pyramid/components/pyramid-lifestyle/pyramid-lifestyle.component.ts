import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid-lifestyle',
  templateUrl: './pyramid-lifestyle.component.html',
  styleUrls: ['./pyramid-lifestyle.component.scss']
})
export class PyramidLifestyleComponent implements OnInit {
  @Input() visibility: boolean;
  constructor() { }

  ngOnInit() {
  }

}
