import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.scss']
})
export class PyramidComponent implements OnInit {



  constructor(public common: CommonService) {

  }

  ngOnInit() {

  }




}
