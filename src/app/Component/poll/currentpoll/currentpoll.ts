import { Component } from '@angular/core';
import { PollService } from "../../../Services/poll.service";
@Component({
     selector: 'app-currentpoll',
     templateUrl: './currentpoll.html',
     styleUrls: ['./currentpoll.css']
})
export class CurrentPollComponent{
         public polls:any[]=[];
         public pageNo:any=1;
         public isValid:any=false;
         public isValidLoader=false;
     constructor(private pollservice: PollService){
               this.getpoll();
     }
     getpoll(){
     this.isValidLoader=true;
     this.pollservice.getpoll(this.pageNo,this.isValid).subscribe((res:any) =>{
     this.polls=res;
     this.isValidLoader=false;
        },(err) =>{
            this.isValidLoader=false;
        })
   } 
}