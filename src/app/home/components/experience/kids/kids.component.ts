import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {
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
