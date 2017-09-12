import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-circular',
  templateUrl: './circular.html',
  styleUrls: ['./circular.css']
})
export class CircularComponent implements OnInit {
         
     constructor(private router:Router){
                  this.router.navigate(["/circular/current_circular"]);
         }
 ngOnInit() {

}
   
}