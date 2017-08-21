import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUserService } from "../../Services/adduser.service";
@Component({
    selector:'app-adduser',
    templateUrl:`./adduser.html`,
    styleUrls:['./adduser.css']
})
export class AddUserComponent implements OnInit{
    showNav = true;
    user: FormGroup;
    public rolesData= JSON.parse(localStorage.getItem("rollid"));
    constructor(private fb: FormBuilder,private adduserservice:AddUserService){
      this.createForm();
    }
      

createForm() {
  console.log(this.rolesData);
  
    this.user = this.fb.group({
      roleIds: ['', [Validators.required,Validators.minLength(1)]],
      username:['',[ Validators.required,Validators.minLength(1)]],
      password:['', [Validators.required,Validators.minLength(1)]],
      name: ['', [Validators.required,Validators.minLength(1)]],
      nickName: '',
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      areaOfInterest:'',
      school:'',
      organization:'',
      designation:'',
      facebookPage:'',
      status:'',
      membershipNo:'',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: '',
      // address: this.fb.group({ 
      //   address1: '',
      //   address2: '',
      //   city: '',
      //   state: '',
      //   pincode: '',

      // }),

    });
  }

     ngOnInit() {
  console.log(this.rolesData);
  }

    signUp(){
     var sign=this.user.value;
    console.log(sign);                    
        this.adduserservice.signUp(sign)
         .subscribe((res)=>{
           console.log(res);
            this.getAddUserDetails();
         },
         (err)=>{
           console.log(err);
          
         });
        
         
  }
    
       getAddUserDetails(){
        this.adduserservice.getAddUserDetails().subscribe((res:any) =>{
          console.log(res);
          //localStorage.setItem("AddUserDetails",JSON.stringify(res));
          //this.router.navigate(['home']);
        },(err) =>{
          console.log(err);
        })
      } 
      
}