import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid-leisure',
  templateUrl: './pyramid-leisure.component.html',
  styleUrls: ['./pyramid-leisure.component.scss']
})
export class PyramidLeisureComponent implements OnInit {
  @Input() visibility: boolean;
  constructor() { }

  ngOnInit() {
  }

}
