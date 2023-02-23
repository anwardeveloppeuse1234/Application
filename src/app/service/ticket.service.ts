import { Injectable } from '@angular/core';
import { services } from '../model/ticket.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: services[];
  apiURL: string = 'http://wsmobile.expressdisplay.net/v1/compte';
  constructor(private http : HttpClient) { 
    this.tickets = [{idAgence : 1,  idClient : 1, idService: 1,lang:1}  ];
  }

  ajouterticket( ticket: services){
    this.tickets.push(ticket);
    }
}
