import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.html',
  styleUrls: ['./poll.css']
})
export class PollComponent implements OnInit {
   public modalRef: BsModalRef;
   poll: FormGroup;
  constructor(private modalService: BsModalService,private fb: FormBuilder) {}
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
     //this.createForm();
  }
   ngOnInit() {
     this.poll = new FormGroup({
       question: new FormControl('', [Validators.required,]),
       Audience: new FormControl('',[]),
       duedate: new FormControl('',[]),
       optiontype: new FormControl('',[]),
       choice1: new FormControl('',[Validators.required,]),
       choice2: new FormControl('',[]),
      
     });
  }
      // createForm(){
      //         this.poll = this.fb.group({
      //            question: ['', Validators.required],
      //            Audience: '',
      //            duedate: '',
      //            optiontype:'',
      //            choice: this.fb.group({
      //              choice1:['', Validators.required],
      //              choice2:'' 
      //            }) 
      //         })
      // }

  onPoll(){
      var obj=this.poll.value;
      console.log(obj);
  }
}