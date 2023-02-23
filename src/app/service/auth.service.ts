import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  users: User[] = [{"tel":12345678}];

  private helper = new JwtHelperService();

  apiURL: string = 'http://wsmobile.expressdisplay.net/v1/compte';
  token!:string;
  
  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];
  
    constructor(private router : Router,
                private http : HttpClient
  ) { }
  
    login(user : User)
    {
    return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
    }
   
   saveToken(jwt:string){
        localStorage.setItem('jwt',jwt);
        this.token = jwt;
        this.isloggedIn = true; 
        this.decodeJWT();
    }
  
    getToken():string {
      return this.token;
    }
  
    decodeJWT()
    {   if (this.token == undefined)
              return;
      const decodedToken = this.helper.decodeToken(this.token);
      this.roles = decodedToken.roles;
      this.loggedUser = decodedToken.sub;
    }
  
   
  /* SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.tel == curUser.tel) {
        validUser = true;
        this.loggedUser = curUser.tel;
        this.isloggedIn = true;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  } */


  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token= undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
    }
  
    setLoggedUserFromLocalStorage(login: string) {
      this.loggedUser = login;
      this.isloggedIn = true;
     // this.getUserRoles(login);
    }
  
    loadToken() {
      this.token = localStorage.getItem('jwt')!;
      this.decodeJWT();
    }
  
    isTokenExpired(): Boolean
    {
      return  this.helper.isTokenExpired(this.token);   
    }
    
}