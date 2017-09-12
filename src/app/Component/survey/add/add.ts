import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from "@angular/forms";
import { SurveyService } from "../../../Services/survey.service";
import { DateService } from "../../../Services/dateservice"
import { Location }  from '@angular/common';
import { Router } from "@angular/router";
declare let $: any;

@Component({
     selector: 'app-add',
     templateUrl: './add.html',
     styleUrls: ['./add.css']
})
export class AddComponent implements OnInit{
      public survey: FormGroup;
      public tomorrow:any;
      public rolesData= JSON.parse(localStorage.getItem("rollid"));
      isValidFormSubmitted =false;
      isValidLoader=false;
      public loader: boolean = false;
constructor(public fb: FormBuilder,
      private surveyservice:SurveyService,
      private dateservice:DateService,
      private router:Router,
      private location: Location ) {
         //this.setDate();           
     } 
ngOnInit(){
       this.initForm();
       this.setDate();
    }
public initForm() {
    this.survey = this.fb.group({
       'title': ['', [Validators.required]],
       'description':['',[Validators.required]],
       'expiredAt':[Date()],
       'roleIds':['',],
       'surveyQuestion': this.fb.array([
            this.initQuestions(),
       ], Validators.minLength(1))
    })
}   
onSurvey(){
   let data=this.survey.value;
       this.isValidLoader=true;
       this.surveyservice.postSurvey(data)
       .subscribe((res) =>{
        this.onSuccess();
        },(err) =>{
             this.onError();   
        })
  }
public initQuestions() {
     return this.fb.group({
       'surveyQuestionTypeId': [(''), [Validators.required]],
       'question': [(''), [Validators.required]],
       'surveyQuestionOption': this.fb.array([
        this.initOptions(),
        this.initOptions(),
      ], Validators.minLength(2),
    
      ),
    })
  }
public addQuestions(e: any) {
    const control = <FormArray>e.controls['surveyQuestion'];
    control.push(this.initQuestions());
  }

public removeQuestions(form: any, index: any) {
    const control = <FormArray>form.controls['surveyQuestion'];
    control.removeAt(index);
  }
public initOptions() {
    return this.fb.group({
      'name': [(''), [Validators.required]],
    })
  }

public addOptions(e: any, i: any) {
    const control = <FormArray>e.controls['surveyQuestion'].controls[i].get("surveyQuestionOption");
    control.push(this.initOptions());
  }

public removeOptions(form: any, i: any, ii: any) {
    const control = <FormArray>form.controls['surveyQuestion'].controls[i].get("surveyQuestionOption");
    control.removeAt(ii);
  }
onDueDate(e:any){
  if( new Date(e.target.value)<new Date(new Date().getFullYear(),new Date().getMonth(),
      new Date().getDate())){
         alert("please select upcoming date");
        this.survey.controls['expiredAt'].patchValue(this.dateservice.getTomorrow())
     }
  }
  onSuccess(){
   this.isValidLoader = false;
   console.log("Successfully Submited");
   this.router.navigateByUrl("/survey");
  }
   onError(){
    this.isValidLoader = false;
    console.log("Some thing went wrong,.,. ");
    this.router.navigateByUrl("/survey");
  }
back(){
    this.location.back();
  }
      setDate(){
        // Set today using the setValue function
        // let date: Date = new Date();
        this.survey.controls['expiredAt'].patchValue(this.dateservice.getToday());
        console.log("todayDate",this.dateservice.getToday());
    }
  
}