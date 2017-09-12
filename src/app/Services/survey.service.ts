import { Injectable } from '@angular/core';
import { CustomHttpService } from "./default.header.service";
import { Configuration } from "./app.constants";
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

 export class SurveyService{
                baseurl: string;
         constructor(private http: CustomHttpService,private config: Configuration ){
              this.baseurl=this.config.baseUrl;
         }
        postSurvey(surveydata:any){
          return this.http.post(this.baseurl +"/admin/survey", surveydata)
          .map((res) =>res.json())
            .catch((err) =>err)
        }
        getSurvey(pageNo: number, isExpired: boolean){
            return this.http.get(this.baseurl + '/admin/survey?pageNo='+pageNo+'&expired='+isExpired)
            .map((res) =>res.json())
            .catch((err) =>err)
        }
        getSurveyDetailById(surveyId:any){
            return this.http.get(this.baseurl +"") 
        }
}