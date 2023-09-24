import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { 
    console.log(this.router)
    const url = this.router['lastSuccessfulNavigation'];
    console.log(url)
  }

  ngOnInit(): void {
  }

}
