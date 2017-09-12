import { Component, OnInit } from '@angular/core';
import { CircularService } from "../../../Services/circular.service";

@Component({
     selector: 'app-closecircular',
     templateUrl: './closecircular.html',
     styleUrls: ['./closecircular.css']
})
export class CloseCircularComponent implements OnInit{
     
            public addcircular:any[]=[];
            public isValidLoader=false;
            public pageNo:any=1;
            public isValid:any=true;
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


}