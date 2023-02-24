import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }




  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          alert(`Votre position est : ${latitude}, ${longitude}`);
        },
        error => {
          console.error(error);
          alert(`Impossible d'obtenir votre position`);
        }
      );
    } else {
      alert(`La géolocalisation n'est pas supportée par votre navigateur`);
    }
  }


  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 36.8665;
  lng = 10.1647;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }



 }