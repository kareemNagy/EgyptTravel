import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-experience-navigation',
  templateUrl: './experience-navigation.component.html',
  styleUrls: ['./experience-navigation.component.scss']
})
export class ExperienceNavigationComponent implements OnInit {

  constructor(public common: CommonService) { }

  exp: any;

  ngOnInit() {
    this.exp = this.common.exp;
  }

  switchExpereince(e, id) {
    e.preventDefault();
    this.exp.map(element => {
      if (element.id == id) {
        element.visibility = true;
      } else {
        element.visibility = false;
      }
    });
    this.common.exp = this.exp;
  }


}
