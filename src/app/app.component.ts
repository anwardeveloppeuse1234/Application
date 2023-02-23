import { Component, ElementRef, HostListener, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User.model';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient,private authService : AuthService,
    private router: Router) { }
  title = 'Application';
  lat = 22.2736308;
  long = 70.7512555;
  topPosToStartShowing = 100;
  @ViewChild('target') private myScrollContainer: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('exampleModal') closebutton : ElementRef<any> = {} as ElementRef;
  @HostListener('window:scroll')
ngOnInit(): void {
  
}
displaySideBar(){

  this.closebutton.nativeElement.click();
}
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
  }
  goToBottom(){
    console.log('test',this.myScrollContainer.nativeElement.scrollHeight)
    window.scroll({
    top: this.myScrollContainer.nativeElement.scrollHeight,
      left:0,
      behavior:'smooth'
    })
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
