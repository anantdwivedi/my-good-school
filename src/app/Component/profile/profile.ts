import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
      public adminData= JSON.parse(localStorage.getItem("userdetail"));
      public rolesData= JSON.parse(localStorage.getItem("rollid")); 
 constructor(private router:Router){

       }

logOut(){
   localStorage.removeItem('access_token');
   localStorage.removeItem('userdetail');
   localStorage.removeItem('rollid');
   this.router.navigate(['/login']);
  }
}