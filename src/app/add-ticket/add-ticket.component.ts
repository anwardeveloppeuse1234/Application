import { Component, OnInit } from '@angular/core';

import { services } from '../model/ticket.model';
import { TicketService } from '../service/ticket.service';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html'
})
export class AddTicketComponent implements OnInit {

  newticket = new services();
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  addticket() {
    //console.log(this.newticket);
    this.ticketService.ajouterticket(this.newticket);
 }

}

