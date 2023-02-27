import { Observable } from 'rxjs';
import { apiURL } from './../config';
import { agenceModel } from './../model/agence.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()

export class AgenceService {
    constructor(private http: HttpClient){
    }

    


    afficheagence(request: agenceModel){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
var body ="id_service" + request.id_service +"&lang" + request.lang+ "&id_client="+request.id_client + "&id_agence=" + request.id_agence + "&token=" + request.token;
return this.http.get( "http://wsmobile.expressdisplay.net/v1/allagences");
    }

  /*   consultclient(id: number): Observable<clientModel>{
      return this.http.get<clientModel>(this.apiURL, id,);
    } */

}