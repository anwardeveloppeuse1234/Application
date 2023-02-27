import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { clientModel } from '../model/client.model';
import { ClientService } from '../services/client.service';
import { emailValidator } from '../utils/validation';


interface IUser {
  name: string;
  nickname: string;
  email: string;
  telephone:string;
  message:string
}
@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {


  reactiveForm!: FormGroup;
  user: IUser;
request: clientModel ;
  constructor(private clientService: ClientService,private formBuilder: FormBuilder) {
    this.user = {} as IUser;
    this.request= {} as clientModel;
  }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [
        Validators.maxLength(10),
      ]),
      telephone:new FormControl(this.user.telephone, [
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
   
    });
    this.reactiveForm.controls['name'].valueChanges.subscribe((value:string) => {
      this.request.nom=value;
    });
    this.reactiveForm.controls['nickname'].valueChanges.subscribe((value:string) => {

      this.request.prenom=value;
    });
    this.reactiveForm.controls['telephone'].valueChanges.subscribe((value:string) => {

      this.request.tel=value;
    });
  }

save(){
  this.request.id_client=7;
  this.request.token="ctKaD7IHbxU";

  this.clientService.createClient(this.request).subscribe((result: any)=>{
    if(result){
      if(result.id_client>0){
        alert('nouveau compte créer')
      }else if(result.id_client == undefined || result.id_client == null){
        alert('compte modifié avec succès');
      }

      alert('success');
    }
  })
}

  }





