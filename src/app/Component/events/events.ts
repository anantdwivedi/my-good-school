import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'fullcalendar';
import * as _ from 'jquery';
declare let $:any;
@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class EventsComponent implements OnInit{
  
         event:  FormGroup;
          public tomorrow:any
          public currentDate:any
          public message:any
          public start:any
          public startT:any
          public endT:any
          public startTime:any
          public endTime:any
       constructor(private element:ElementRef){
          
       }
         public getTomorrow() {
      var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
      var year = currentDate.getFullYear()
      this.tomorrow = year + '-' + month + '-' + day;
      return this.tomorrow;
}
  onStartDate(e:any){

    //       this.currentDate=e.target.value;
    // if(new Date(e.target.value) < new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())){
    //   this.message="Please choose an upcoming date from the calendar";
    //   $('#modal-success').modal('show');               
    //   this.event.controls['startDate'].patchValue(this.start);
    //   this.event.controls['endDate'].patchValue(this.start);
    // }
      
    // if(new Date(e.target.value)> new Date(this.event.controls['endDate'].value)){
    //   this.message="Please choose date before end date from the calendar";
    //   $('#modal-success').modal('show');               
    //   this.event.controls['startDate'].patchValue(this.start);
    // }
    // this.startT(this.startTime);
    // this.endT(this.endTime);   
  }
       ngOnInit(){
          this.event= new FormGroup({
            title: new FormControl('', [Validators.required,]),
            startdate:  new FormControl('', [Validators.required,]), 
            enddate: new FormControl('', [Validators.required,]),
            starttime: new FormControl('',[]),
            endtime: new FormControl('',[]),
            description: new FormControl('',[Validators.required,]),
            location: new FormControl('',[]),
          })
       }
       onEvent(){
         var obj=this.event.value
          console.log(obj);
       }
     calendarOptions:Object = {
        // height: 'parent',
        // fixedWeekCount : false,
        // defaultDate: '2016-09-12',
        // editable: true,
        // eventLimit: true,
        fixedWeekCount: false,
        editable: true,
        eventLimit: true,
        firstDay: 1,
        selectable: true,
        selectHeader: true,
        timeFormat: ' ',
        header: {
          right: 'today,month,listMonth,week,day, prev,next'
        },// allow "more" link when too many events
        events: [
               
        ],
          select: (start, end) => {
            
            $("#fullCalModal").modal();
          },
          eventClick: (calEvent, jsEvent, view) => {
          
         },
      };
  }
    