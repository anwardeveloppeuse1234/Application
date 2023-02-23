import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div id="map" style="height: 200px; width: 100%;"></div>
  `,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {const map = L.map('map').setView([51.505, -0.09], 20);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.google.com/maps/place/ExpressDisplay/@36.8527466,10.1890438,16z/data=!4m12!1m6!3m5!1s0x0:0xe4d4e4f174704108!2sExpressDisplay!8m2!3d36.852635!4d10.1890438!3m4!1s0x0:0xe4d4e4f174704108!8m2!3d36.852635!4d10.1890438">OpenStreetMap</a> contributors'
  }).addTo(map);
}
}
