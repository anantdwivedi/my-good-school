import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-survey',
  templateUrl: './survey.html',
  styleUrls: ['./survey.css']
})
export class SurveyComponent implements OnInit {
     
  constructor(private router:Router){
              this.router.navigate(["/survey/current_survey"]);
       }
ngOnInit(){
       
     }

}