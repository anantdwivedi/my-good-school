import { Component, OnInit } from '@angular/core';
import { SurveyService } from "../../../Services/survey.service";
@Component({
     selector: 'app-current',
     templateUrl: './current.html',
     styleUrls: ['./current.css']
})
export class CurrentComponent implements OnInit{
            public showSurvey:any[]=[];
            public isValidLoader=false;
            public pageNo:any=1;
            public isValid:any=false;
     constructor(private surveyservice:SurveyService){

     }
     ngOnInit(){
           this.getSurvey();
     }
     getSurvey(){
           this.isValidLoader=true;
           this.surveyservice.getSurvey(this.pageNo,this.isValid).subscribe((res:any) =>{
           this.showSurvey=res;
           this.isValidLoader=false;
      },(err) =>{
            this.isValidLoader=false;
        })
  }
}