import { clientModel } from './../model/client.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()

export class ClientService {
    constructor(private http: HttpClient){
    }



    createClient(request: clientModel){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('admin:expressmobile$$2018')
            })
          };
var body ="nom=" + request.nom +"&prenom=" + request.prenom+ "&tel="+request.tel + "&id_client=" + request.id_client + "&token=" + request.token;
return this.http.post("http://wsmobile.expressdisplay.net/v1/compte",body,httpOptions);
    }

}