import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AgencesComponent } from './agences/agences.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { AvisComponent } from './avis/avis.component';
import { CaricatureComponent } from './caricature/caricature.component';
import { CompteComponent } from './compte/compte.component';
import { ContactComponent } from './contact/contact.component';
import { HistoriqueComponent } from './historique/historique.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { MapComponent } from './map/map.component';
import { ModifierComponent } from './modifier/modifier.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ServicesComponent } from './services/services.component';
import { TesttComponent } from './testt/testt.component';

const routes: Routes = [
  {path: "identifier", component : IdentifierComponent},
  {path: "map", component : MapComponent},
  {path: "inscrit", component : InscritComponent},
  {path: "contact", component : ContactComponent},
  {path: "acceuil", component : AcceuilComponent},
  {path: "index", component : AppComponent},
  {path: "caricature", component : CaricatureComponent},
  {path: "agences", component : AgencesComponent},
  {path: "services", component : ServicesComponent},
  {path: "compte", component : CompteComponent},
  {path: "modifier", component : ModifierComponent},
  {path: "ajouter", component : AjouterComponent},
  {path: "historique", component : HistoriqueComponent},
  {path: "test", component : TesttComponent},
  {path: "apropos", component : AproposComponent},
  {path: "rendezVous", component : RendezVousComponent},

  {path: "avis", component : AvisComponent},
  {path: "ticket", component : AddTicketComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
