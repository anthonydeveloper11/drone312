import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  navigateToAbout(navigateTo: any) { 
    this.router.navigate(
      ['/about/'],
    {queryParams: {id: navigateTo}}
    );
    this.commonService.changeMessage(navigateTo)
  }

}
