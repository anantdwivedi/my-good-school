import { Component } from '@angular/core';
import { SurveyService } from "../../../Services/survey.service";
@Component({
     selector: 'app-closesurvey',
     templateUrl: './closesurvey.html',
     styleUrls: ['./closesurvey.css']
})
export class CloseSurveyComponent{
       public showSurvey:any[]=[];
            public isValidLoader=false;
            public pageNo:any=1;
            public isValid:any=true;
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