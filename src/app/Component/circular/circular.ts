import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CircularService } from "../../Services/circular.service";
@Component({
  selector: 'app-circular',
  templateUrl: './circular.html',
  styleUrls: ['./circular.css']
})
export class CircularComponent implements OnInit {
 title:string="events  page";
   circular: FormGroup;
   public tomorrow:any
   public rolesData= JSON.parse(localStorage.getItem("rollid"));
     constructor(private circularservice:CircularService){
         
     }
   ngOnInit() {
     console.log(this.rolesData);
    this.circular = new FormGroup({
      circularId:new FormControl('',[]), 
      title: new FormControl('', [Validators.required,]),
      description: new FormControl('',[Validators.required,]),
      expireOn: new FormControl(this.getTomorrow(),[Validators.required]),
      Audience: new FormControl('',[]),
      selectMultiple: new FormControl('',[]),
    });
  }
   public getTomorrow() {
      var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
      var year = currentDate.getFullYear()
      this.tomorrow = year + '-' + month + '-' + day;
      return this.tomorrow;
}

  audienceSelect(e:any){
    if(e==1){
      console.log("1")
      this.circular.addControl('selectMultiple',new FormControl('',[Validators.required]));
      console.log(this.circular.value);
    }
    else if(e==2){
      this.circular.removeControl('selectMultiple');
      console.log(this.circular.value);
      
    }
  }
  onCircular(){
       var obj=this.circular.value;
       console.log(obj);
       this.circularservice.onCircular(obj)
       .subscribe((res) =>{
         console.log(res);
          this.getCircular();
       },
       (err) =>{
         console.log(err);
       })
  }
    getCircular(){
         this.circularservice.getCircular().subscribe((res:any) =>{
           console.log(res);
           localStorage.setItem("CircularDetails",JSON.stringify(res));
         })
    }

  onDueDate(e:any){
    if(new Date(e.target.value)<new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate())){
      alert("please choose an upcoming date");
      this.circular.controls['duedate'].patchValue(this.tomorrow);
    }

  }
}