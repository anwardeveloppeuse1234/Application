import { InscritComponent } from './inscrit/inscrit.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { MapComponent } from './map/map.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { CaricatureComponent } from './caricature/caricature.component';
import { AgencesComponent } from './agences/agences.component';
import { ServicesComponent } from './services/services.component';
import { CompteComponent } from './compte/compte.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { HistoriqueComponent } from './historique/historique.component';
import { TesttComponent } from './testt/testt.component';
import { AproposComponent } from './apropos/apropos.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AvisComponent } from './avis/avis.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { LoginComponent } from './login/login.component';
import { ClientService } from './services/client.service';
import { TicketService } from './service/ticket.service';
import { AgenceService } from './services/agence.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    IdentifierComponent,
    MapComponent,
    InscritComponent,
    AcceuilComponent,
    ContactComponent,
    CaricatureComponent,
    AgencesComponent,
    ServicesComponent,
    CompteComponent,
    ModifierComponent,
    AjouterComponent,
    HistoriqueComponent,
    TesttComponent,
    AproposComponent,
    RendezVousComponent,
    AvisComponent,
    AddTicketComponent,
    LoginComponent,
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ClientService,
              TicketService,
              AgenceService
             
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
