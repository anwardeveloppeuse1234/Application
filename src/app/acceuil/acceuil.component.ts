import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

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
