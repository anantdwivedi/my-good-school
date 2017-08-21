import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

  @Injectable()
  export class CircularService{
          baseurl: string;
         constructor(private http: CustomHttpService,private config: Configuration){
              this.baseurl=this.config.baseUrl;
        }
        onCircular(circularData:any){
               return this.http.post(this.baseurl +"/admin/circular",circularData)
               .map((response:Response) =>{
                   console.log(response);
                  return response.json();
               }).catch((err) =>{
                     console.log(err);
                     return err;
               })
       }
         getCircular(){
               return this.http.get(this.baseurl +"admin/circular")
               .map((res) =>res.json())
                .catch((err) =>err);
         }
  }  


