import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { AuthService } from '../service/auth.service';



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

  constructor(private http: HttpClient,private authService : AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  

 /*  displaySideBar(){

    this.closebutton.nativeElement.click();
  } */
    checkScroll() {
        
      // window의 scroll top
      // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
  
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      console.log('[scroll]', scrollPosition);
      
    }
 
    gotoTop() {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  err:number = 0;
  
    user = new User();
   
    onLoggedin()
    {
      this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
      this.err = 1;
      }
      });
     
    }
    
}
