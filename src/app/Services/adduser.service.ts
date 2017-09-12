import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
 export class AddUserService{
          baseurl: string;
     constructor(private http: CustomHttpService,private config: Configuration){
          this.baseurl= this.config.baseUrl;
     }

signUp(userdata:any){
   return this.http.post(this.baseurl +"/admin/user",userdata)
   .map((response: Response)=>{
    console.log(response);
      return response.json();
  }).catch((err) =>{
     return err;
 })
  }
getAddUserDetails(){
    return this.http.get(this.baseurl+"/admin/user" )
    .map((res) =>res.json())
    .catch((err) =>err);
  }
 }