import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

canActivate() {
    // If the user is not logged in we'll send them back to the home page
     var token = localStorage.getItem('access_token');
     if (token) {
     
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }
 
  }

}