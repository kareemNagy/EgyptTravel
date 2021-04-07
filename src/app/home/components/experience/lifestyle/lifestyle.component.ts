import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {
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
