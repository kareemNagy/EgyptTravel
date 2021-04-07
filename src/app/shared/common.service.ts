import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  exp: any = [
    {
      title: "culture",
      visibility: true,
      id: "culture",
      img: "assets/images/s1.jpg"
    },
    {
      title: "Leisure & Adventure",
      visibility: false,
      id: "leisure",
      img: "assets/images/s2.jpg"
    },
    {
      title: "egyptian Lifestyle",
      visibility: false,
      id: "lifestyle",
      img: "assets/images/s3.jpg"
    },
    {
      title: "Kids World",
      visibility: false,
      id: "kids",
      img: "assets/images/s4.jpg"
    },
  ]


}
