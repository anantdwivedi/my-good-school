import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CircularService } from "../../../Services/circular.service";
import { DateService } from "../../../Services/dateservice";
import { Location } from '@angular/common';
declare let $: any;

@Component({
  selector: 'app-addcircular',
  templateUrl: './addcircular.html',
  styleUrls: ['./addcircular.css']
})
export class AddCircularComponent implements OnInit {
        circular: FormGroup;
        public file: any
        public tomorrow: any;
        isValidFormSubmitted = false;
        isValidLoader = false;
        public rolesData = JSON.parse(localStorage.getItem("rollid"));
        public adminData = JSON.parse(localStorage.getItem("userdetail"))
  constructor(private circularservice: CircularService,
        private router: Router,
        private dateservice:DateService,
        private location: Location) {
    }
  ngOnInit() {
        console.log(this.rolesData);
        this.circular = new FormGroup({
        roleIds: new FormControl('', []),
        title: new FormControl('', [Validators.required,]),
        description: new FormControl('', [Validators.required,]),
        expireOn: new FormControl(this.dateservice.getTomorrow(), [Validators.required]),
        file: new FormControl(''),
    });
  }
  getFile(event: any) {
        var blob = event.srcElement.files[0];
      if (blob.type == "image/png" || blob.type == "image/jpeg" || blob.type == "image/jpg") {
         this.file = event.srcElement.files[0];
       }
      else {
         $('#errorModal').modal('show');
         this.circular.controls['file'].reset();
    }
  }
  onCircular() {
        let data = this.circular.value;
        data["adminId"] = this.adminData.id;
        var formData = new FormData();
         console.log("circularData",data);
        formData.append('title', this.circular.value['title']);
        formData.append('roleIds', this.circular.value['circularId']);
        formData.append('description', this.circular.value['description']);
        formData.append('expireOn', this.circular.value['expireOn']);
        formData.append('file', this.file);
        this.isValidLoader = true;
        this.circularservice.onCircular(formData)
       .subscribe((res) => {
         this.onSuccess();
      },
      (err) => {
        this.onError();
      })
  }
  resetForm() {
        this.circular.reset();
  }
 onDueDate(e: any) {
     if (new Date(e.target.value) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) {
        alert("please choose an upcoming date");
        this.circular.controls['duedate'].patchValue(this.dateservice.getTomorrow());
   }
 }
  back() {
     this.location.back();
  }
onSuccess(){
   this.isValidLoader = false;
   console.log("Successfully Submited");
   this.router.navigateByUrl("/circular");
  }
onError(){
    this.isValidLoader = false;
    console.log("Some thing went wrong,.,. ");
    this.router.navigateByUrl("/circular");
  }

}