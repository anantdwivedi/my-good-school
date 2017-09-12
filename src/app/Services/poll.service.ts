import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

 export class PollService{
    baseurl: string;
    constructor(private http: CustomHttpService, private config: Configuration) {
         this.baseurl= this.config.baseUrl;
     }
     createPoll(polldata:any){
         return this.http.post(this.baseurl +"/admin/poll",polldata)
         .map((response:Response) =>{
             console.log(response);
              return response.json();
         }).catch((err)=>{
              return err;
         })
     }
//       getpoll(){
//     return this.http.get(this.baseurl+"/admin/poll/pageNo/1" )
//     .map((res) =>res.json())
//     .catch((err) =>err);
//   }
      getpoll(pageNo: number, isExpired: boolean){
          return this.http.get(this.baseurl + '/admin/poll?pageNo='+pageNo+'&expired='+isExpired)
          .map((res) =>res.json())
          .catch((err) =>err); 
      }
 }