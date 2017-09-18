import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'fullcalendar';
import * as _ from 'jquery';
import { EventService } from "../../Services/event.service";
declare let $: any;
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
          public pageNo:any=1;
          public isExpired:boolean=true;
          public eventId:any;
       constructor(private element:ElementRef,private eventservice:EventService){
                 this.getEvent();
                 this.getEventTypeId();
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

  }
       ngOnInit(){
          this.event= new FormGroup({
            title: new FormControl('', [Validators.required,]),
            startDate:  new FormControl('', [Validators.required,]), 
            endDate: new FormControl('', [Validators.required,]),
            startTime: new FormControl('',[]),
            eventTypeId: new FormControl('',[]),
            endTime: new FormControl('',[]),
            description: new FormControl('',[Validators.required,]),
            location: new FormControl('',[]),
          })
       }
       onEvent(){
         var obj=this.event.value
         // console.log(obj);
          this.eventservice.addEvent(obj).subscribe((res) =>{
               console.log(res);
          })
       }
       getEvent(){
          this.eventservice.getEvent(this.pageNo,this.isExpired).subscribe((res) =>{
                     console.log("aa nhi",res);
          })
       }
       getEventTypeId(){
         this.eventservice.getEventTypeId().subscribe((res) =>{
           this.eventId=res; 
          localStorage.setItem("eventType",JSON.stringify(res));
          console.log(this.eventId);     
         })
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
    