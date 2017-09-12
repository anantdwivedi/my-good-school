import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit  {
          user: FormGroup;
          showNav = true;
   constructor(private router: Router,
               private authservice: AuthService) {
                 if(authservice.hasLoggedIn()){                
                    router.navigate(['/home']);
                  }
               }
  ngOnInit() {
       this.user = new FormGroup({
       username: new FormControl('', [Validators.required, Validators.minLength(2)]),
       password: new FormControl('',[Validators.required, Validators.minLength(2)]),
    });
  }
onSubmit() {                  
      let data = this.user.value;
     // console.log(data);
      this.authservice.login(data).subscribe((res: any) => {
     // console.log(res);
      localStorage.setItem("access_token", res.access_token);
          this.getUserinfo();
          this.getrollid();
    },(err) => {
       
    });
  }
getUserinfo(){
          let uname= this.user.value.username;
          this.authservice.getUserinfo(uname).subscribe((res:any) =>{
         // console.log(res);
          localStorage.setItem("userdetail",JSON.stringify(res));
          this.router.navigateByUrl("/home");
        },(err) =>{

        })
      } 
getrollid(){
   this.authservice.getrollid().subscribe((res:any) =>{
      localStorage.setItem("rollid",JSON.stringify(res));
        })
      }
}
      