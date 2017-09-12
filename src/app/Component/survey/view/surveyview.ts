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
     constructor(private router:Router,
      private surveyservice:SurveyService,
       public route: ActivatedRoute){
    }

     ngOnInit(){
          this.route.params.subscribe(params => {
      this.id = params['id'];
    });
     }

}