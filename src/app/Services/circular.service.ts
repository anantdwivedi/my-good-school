import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Response, Http, RequestOptions, Headers } from '@angular/http';

  @Injectable()
  export class CircularService{
          baseurl: string;
         constructor(private http: CustomHttpService,
             private config: Configuration,private httpf:Http){
              this.baseurl=this.config.baseUrl;
        }
        onCircular(circularData:any){
              var options = new RequestOptions({
                  headers: new Headers({
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                  })
                  });
               return this.httpf.post(this.baseurl +"/admin/circular",circularData,options)
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


