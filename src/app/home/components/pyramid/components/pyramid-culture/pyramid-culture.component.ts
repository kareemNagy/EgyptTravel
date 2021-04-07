import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid-culture',
  templateUrl: './pyramid-culture.component.html',
  styleUrls: ['./pyramid-culture.component.scss']
})
export class PyramidCultureComponent implements OnInit {
  @Input() visibility: boolean;
  constructor() { }

  ngOnInit() {
  }

}
