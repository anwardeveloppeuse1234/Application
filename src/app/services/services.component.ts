import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { services } from '../model/ticket.model';
import { TicketService } from '../service/ticket.service';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  apiURL: string = 'http://wsmobile.expressdisplay.net/v1/compte';
 

  tickets? : services[];
  constructor(private http : HttpClient,private ticketService: TicketService) {
  }
  ngOnInit(): void {
   
/*     this.tickets = this.ticketService.listeTickets();
 */
  }

 
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

 
  
}
