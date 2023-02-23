import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface IUser {
  name: string;
  nickname: string;
  email: string;
  message:string
}

@Component({
  selector: 'app-root',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.scss'],
})
export class IdentifierComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  

}
