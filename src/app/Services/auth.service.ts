import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { CustomHttpService } from './default.header.service';
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
// Avoid name not found warnings

@Injectable()
export class AuthService {
  baseurl: string;

  constructor(private http: CustomHttpService,
    private config: Configuration) {
         this.baseurl= this.config.baseUrl;
  }


  login(data:any) {
    let url = "/oauth/token?grant_type=password&username=" +data.username + "&password=" + data.password;
    
    return this.http.post(this.baseurl + url, {})
    .map((response: Response)=> {
       console.log(response);
       return response.json();

    })
    .catch((err)=>{
      return err;
    });
  }
    rolid(){
      return this.http.post(this.baseurl + "/admin/roles",[])
      .map((response: Response)=>{
         console.log(response);
           return response.json();
       }).catch((err) =>{
         return err;
       }) 
    }
   getrollid(){
     return this.http.get(this.baseurl +"/admin/roles"
       ).map((res) =>res.json())
       .catch((err) =>err);
   }
  // signUp(userdata:any){
  //     // let url = "/oauth/token?grant_type=password&username=" +userdata.user;
  //      return this.http.post(this.baseurl +"/admin/addUser",userdata)
  //      .map((response: Response)=>{
  //        console.log(response);
  //          return response.json();
  //      }).catch((err) =>{
  //        return err;
  //      })
  // }
  getUserinfo(name:any){
    return this.http.get(this.baseurl +"/admin"
    ).map((res) =>res.json())
    .catch((err) =>err);
  }
  // getAddUserDetails(){
  //   return this.http.get(this.baseurl+"/admin/addUser" )
  //   .map((res) =>res.json())
  //   .catch((err) =>err);
  // }

  //     get authenticated() {
  //   // Check if there's an unexpired access token
  //   return tokenNotExpired('access-token');
  // }
  //  isLoggedIn() {
  //   let access_token = localStorage.getItem("access_token");
  //   if (access_token) {
  //     return !this.login;
  //   } else {
  //     return this.login;
  //   }
  // }
       hasLoggedIn(){
      if(localStorage.getItem('access_token')){
         return true;
      }else{
         return false;
      }
    }

}