import { Component, OnInit } from '@angular/core';
import { CircularService } from "../../../Services/circular.service";

@Component({
     selector: 'app-currentcircular',
     templateUrl: './currentcircular.html',
     styleUrls: ['./currentcircular.css']
})
export class CurrentCircularComponent implements OnInit{
     
            public addcircular:any[]=[];
            public isValidLoader=false;
            public pageNo:any=1;
            public isValid:any=false;
     constructor(private circularservice:CircularService){
        
         }
 ngOnInit() {
   this.getCircular();
}
 getCircular(){
     this.isValidLoader=true;
     this.circularservice.getCircular(this.pageNo,this.isValid).subscribe((res:any) =>{
     this.addcircular=res;
      this.isValidLoader=false;
         },(err) =>{
             this.isValidLoader=false;
         })
     }
  previousPoll(){
          delete this.addcircular;
          this.pageNo -= 1;
          this.getCircular();
       }
  nextPoll(){
         delete this.addcircular;
         this.pageNo += 1;
          this.getCircular();
  }
    
}
