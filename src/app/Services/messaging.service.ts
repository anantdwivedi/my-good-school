import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

 export class MessagingService{
    baseurl: string;
    constructor(private http: CustomHttpService, private config: Configuration) {
         this.baseurl= this.config.baseUrl;
     }
     postMessage(message:any){
        return this.http.post(this.baseurl +"/admin/conversation",message)
         .map((res) =>res.json())
         .catch((err) =>err);
     }
     userSidePost(userMessage:any){
         return this.http.post(this.baseurl +"/admin/conversation/message",userMessage)
         .map((res) =>res.json())
         .catch((err) =>err);
     }
     getMessage(pageNo: number){
         return this.http.get(this.baseurl +'/admin/conversation?pageNo='+pageNo)
          .map((res) =>res.json())
          .catch((err) =>err); 
     }   
    getUsers(){
         return this.http.get(this.baseurl +"/admin/users")
          .map((res) =>res.json())
          .catch((err) =>err);  
     }
     getMessageConversationById(pageNo: number,conversationId:any){
          return this.http.get(this.baseurl +'/admin/conversation/'+conversationId+'?pageNo='+pageNo)
           .map((res) =>res.json())
          .catch((err) =>err); 
     }
 }


