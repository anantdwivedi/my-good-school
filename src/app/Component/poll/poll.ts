import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.html',
  styleUrls: ['./poll.css']
})
export class PollComponent implements OnInit {
      
      constructor(private router:Router){
            this.router.navigate(["/poll/current_poll"]);
      }  
ngOnInit() {
  
         }  
   }