import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CircularService } from "../../../Services/circular.service";

@Component({
  selector: 'app-circularview',
  templateUrl: './circularview.html',
  styleUrls: ['./circularview.css']
})
export class CircularViewComponent implements OnInit {
         public id: any;
     constructor(private router:Router,
         private circularservice:CircularService,
         public route: ActivatedRoute){
    }
 ngOnInit(){
    this.route.params.subscribe(params => {
    this.id = params['id'];
  });
 }

}