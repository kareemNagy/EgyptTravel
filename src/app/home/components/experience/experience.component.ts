import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() videoStatus: boolean;

  constructor(public common: CommonService) { }

  ngOnInit() {


  }




}
