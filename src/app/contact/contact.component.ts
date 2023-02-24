import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../utils/validation';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  message:string
}

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
   
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get nickname() {
    return this.reactiveForm.get('nickname')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('Name:', this.user.name);
    console.info('Nickname:', this.user.nickname);
    console.info('Email:', this.user.email);
    
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
