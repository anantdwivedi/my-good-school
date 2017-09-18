import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SurveyService } from "../../../Services/survey.service";

@Component({
  selector: 'app-surveyview',
  templateUrl: './surveyview.html',
  styleUrls: ['./surveyview.css']
})
export class SurveyViewComponent implements OnInit {
         public id: any;
         public Question:any[]=[];
         public Survey:any[]=[];
     constructor(private router:Router,
      private surveyservice:SurveyService,
       public route: ActivatedRoute){
    }

     ngOnInit(){
      this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getSurveyDetailById();
    });
     }
      getSurveyDetailById(){
        this.surveyservice.getSurveyDetailById(this.id).subscribe((res:any) =>{
                  this.Question=res.questions;
                  this.Survey=res.survey
              console.log("questiondetail",this.Question); 
              console.log("surveydetail",this.Survey); 
        })
  }

}