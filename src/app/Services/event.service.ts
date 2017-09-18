import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

 export class EventService{
    baseurl: string;

      constructor(private http: CustomHttpService, private config: Configuration){
                   this.baseurl= this.config.baseUrl;
      }
      addEvent(event:any){
         return this.http.post(this.baseurl +"/admin/event",event)
         .map((res) =>res.json())
         .catch((err) =>err);
      }
      getEvent(pageNo: number, isExpired: boolean){
          return this.http.get(this.baseurl + '/admin/event?pageNo='+pageNo+'&expired='+isExpired)
      }
      getEventTypeId(){
          return this.http.get(this.baseurl +"/admin/eventType")
          .map((res) =>res.json())
          .catch((err) =>err);
      }
 }