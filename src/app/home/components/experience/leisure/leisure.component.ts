import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.scss']
})
export class LeisureComponent implements OnInit {
  @Input() visibility: boolean;
  constructor() { }

  ngOnInit() {
  }
  visibilityTime() {
    setTimeout(() => {
      return this.visibility;
    }, 500);
  }
}
