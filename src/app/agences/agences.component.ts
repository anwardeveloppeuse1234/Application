import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}