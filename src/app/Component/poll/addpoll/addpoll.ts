import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PollService } from "../../../Services/poll.service";
import { DateService } from "../../../Services/dateservice"
import { Location }  from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.html',
  styleUrls: ['./addpoll.css']
})
export class AddPollComponent implements OnInit {
     poll: FormGroup;
     isValidFormSubmitted = false;
     isValidLoader= false;
     public adminData= JSON.parse(localStorage.getItem("userdetail"))
     public rolesData: any[]=JSON.parse(localStorage.getItem("rollid"));;
     inputs = [{value: ""}];
 addInput()  {
     this.inputs.push({value: ''});
  }
  constructor(private fb: FormBuilder,
              private pollservice: PollService,
              private location: Location,
              private dateservice:DateService,
              private router:Router) {   
           }

ngOnInit() {
   console.log(this.adminData)       
   this.poll = this.fb.group({
   'question': ['', [Validators.required]], 
   'roleIds': '', 
   'expireOn': ['', (this.dateservice.getTomorrow(),[Validators.required])],
   'pollTypeId': '',
   'choices': new FormArray([
            new FormControl(null,[Validators.required]),
            new FormControl(null,[Validators.required]),    
       ])
    })
  }
onAddSpecialRequest (e:any) {
    const control = <FormArray>e.controls['choices'];
         control.push(new FormControl(null,[Validators.required]));   
   }
onRemoveSpecialRequest (form: any, index: any) {
    const control = <FormArray>form.controls['choices'];
         control.removeAt(index);
    }
createPoll(){ 
    this.onSuccess();
    let data = this.poll.value;
    data["adminId"]=this.adminData.id;
      this.isValidLoader=true;
    this.pollservice.createPoll(data)
    .subscribe((res)=>{
    this.onSuccess();  
         },
         (err)=>{
           this.onError();
         });
  }
   onSuccess(){
   this.isValidLoader = false;
   console.log("Successfully Submited");
   this.router.navigateByUrl("/poll");
  }
   onError(){
    this.isValidLoader = false;
    console.log("Some thing went wrong,.,. ");
    this.router.navigateByUrl("/poll");
  }
 onDueDate(e:any){
     if(new Date(e.target.value)<new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate())){
        alert("please choose an upcoming date");
        this.poll.controls['expireOn'].patchValue(this.dateservice.getTomorrow);
   }
  }
  back(){
    this.location.back();
  }
  
}