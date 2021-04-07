import { Component, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss'],

})
export class CultureComponent implements OnInit {

  @Input() visibility: boolean;
  @Input() videoStatus: boolean;

  ngOnInit() {
  }

  visibilityTime() {
    setTimeout(() => {
      return this.visibility;
    }, 500);
  }


}
