import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.html',
  styleUrls: ['./account.css']
})
export class AccountComponent {
  
    public adminData= JSON.parse(localStorage.getItem("userdetail"));
    public rolesData= JSON.parse(localStorage.getItem("rollid"));  
        
}