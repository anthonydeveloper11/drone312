import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.currentMessage.subscribe((res)=>{
      const getLocation = document.querySelector('#'+res);
      if(getLocation) {
        getLocation.scrollIntoView();
      }
    })
  }

}
