import { Component } from '@angular/core';
import { PollService } from "../../../Services/poll.service";

@Component({
    selector:'app-closepoll',
    templateUrl:'./closepoll.html',
    styleUrls:['./closepoll.css']
})
export class ClosePollComponent{

        public polls:any[]=[];
        public pageNo:any=1;
        public isValid:any=true;
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