import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CircularService } from "../../Services/circular.service";
declare let $: any;
@Component({
  selector: 'app-circular',
  templateUrl: './circular.html',
  styleUrls: ['./circular.css']
})
export class CircularComponent implements OnInit {
 title:string="events  page";
   circular: FormGroup;
   public file:any
   public tomorrow:any
   public addcircular:any[]=[];
   public rolesData= JSON.parse(localStorage.getItem("rollid"));
   public adminData= JSON.parse(localStorage.getItem("userdetail"))
     constructor(private circularservice:CircularService){
            this.getCircular();
     }
   ngOnInit() {
     console.log(this.rolesData);
    this.circular = new FormGroup({
      roleIds:new FormControl('',[]), 
      title: new FormControl('', [Validators.required,]),
      description: new FormControl('',[Validators.required,]),
      expireOn: new FormControl(this.getTomorrow(),[Validators.required]),
      file: new FormControl(''),
    });
  }
    
//     public fileChangeEvent(fileInput: any){
//       if (fileInput.target.files && fileInput.target.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e : any) {
//             $('#preview').attr('src', e.target.result);
//         }

//         reader.readAsDataURL(fileInput.target.files[0]);
//     }
// }
    
         getFile(event: any) {
             var blob = event.srcElement.files[0];
            if(blob.type=="image/png" || blob.type=="image/jpeg" || blob.type=="image/jpg"){
                  this.file = event.srcElement.files[0];
             }
       else{
           $('#errorModal').modal('show');
          this.circular.controls['file'].reset();
       }
  }
   public getTomorrow() {
      var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
      var year = currentDate.getFullYear()
      this.tomorrow = year + '-' + month + '-' + day;
      return this.tomorrow;
}

  // audienceSelect(e:any){
  //   if(e==1){
  //     console.log("1")
  //     this.circular.addControl('selectMultiple',new FormControl('',[Validators.required]));
  //     console.log(this.circular.value);
  //   }
  //   else if(e==2){
  //     this.circular.removeControl('selectMultiple');
  //     console.log(this.circular.value);
      
  //   }
  // }
  onCircular(){
      // var obj=this.circular.value;
      // console.log(obj);
       let data = this.circular.value;
       data["adminId"]=this.adminData.id;
       console.log(data);
       var formData= new FormData();
       formData.append('title',this.circular.value['title']);
       formData.append('roleIds',this.circular.value['circularId']);
       formData.append('description',this.circular.value['description']);
       formData.append('file',this.file);
      // formData.append('adminId',this.adminData.id);
       //formData.append('file', this.file);
       this.circularservice.onCircular(formData)
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
           //console.log(res);
             this.addcircular=res;
             console.log('cfgfggghhg',this.addcircular);
          // localStorage.setItem("CircularDetails",JSON.stringify(res));
         })
    }

  onDueDate(e:any){
    if(new Date(e.target.value)<new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate())){
      alert("please choose an upcoming date");
      this.circular.controls['duedate'].patchValue(this.tomorrow);
    }

  }
}