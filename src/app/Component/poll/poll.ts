import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PollService } from "../../Services/poll.service";
@Component({
  selector: 'app-poll',
  templateUrl: './poll.html',
  styleUrls: ['./poll.css']
})
export class PollComponent implements OnInit {
  tomorrow: string;
  public modalRef: BsModalRef;
   poll: FormGroup;
   public polls:any[]=[];
 // public rolesData= JSON.parse(localStorage.getItem("rollid"));
  public adminData= JSON.parse(localStorage.getItem("userdetail"))
  public rolesData: any[]=JSON.parse(localStorage.getItem("rollid"));;
  inputs = [{value: ""}];
  addInput()  {
    this.inputs.push({value: ''});
  }
  constructor(private modalService: BsModalService,
              private fb: FormBuilder,
              private pollservice: PollService) {
                  this.getpoll();
           }
              
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
     //this.createForm();
  }
    public getTomorrow() {
      var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
      var year = currentDate.getFullYear()
      this.tomorrow = year + '-' + month + '-' + day;
      return this.tomorrow;
}
   ngOnInit() {
         console.log(this.adminData)
     this.poll = new FormGroup({
       question: new FormControl('', [Validators.required,]),
       roleIds: new FormControl('',[]),
       expireOn: new FormControl('',[]),
       //choices: new FormControl([],[]),
     // Audience: new FormControl('',[]),
       pollTypeId: new FormControl('',[]),
      // selectMultiple: new FormControl('',[]),
       choices: new FormArray([
        new FormControl(null)
       ])
       // choice1: new FormControl('',[]),
       // choice2: new FormControl('',[]),
      
     });

    //   this.poll = this.fb.group({
    //   'question': ['', [Validators.required]],
    //   'Audience': ['', ],
    //   'duedate': ['', ],
    //   'optiontype': ['',],
    //   'subchoice': this.fb.array([
    //      'choice1', ['', ],
    //       'choice2', ['',],
    //   ])
       
    // })
  }
  onAddSpecialRequest () {
      const choices=<FormArray>this.poll.controls['choices'];
      choices.push(new FormControl(null));
     
   }
   onRemoveSpecialRequest (index) {
      //this.poll.controls['choice'].removeAt(index);
      const choices=<FormArray>this.poll.controls['choices'];
      choices.removeAt(index);
    }

  createPoll(){
    let data = this.poll.value;
       data["adminId"]=this.adminData.id;
       console.log(data);
          this.pollservice.createPoll(data)
         .subscribe((res)=>{
           console.log(res);
         },
         (err)=>{
           console.log(err);
          
         });

  }
   getpoll(){
        
           this.pollservice.getpoll().subscribe((res:any) =>{
              this.polls=res;
          console.log(this.polls);

        },(err) =>{
          console.log(err);
        })
   }
   onDueDate(e:any){
    if(new Date(e.target.value)<new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate())){
      alert("please choose an upcoming date");
      this.poll.controls['duedate'].patchValue(this.tomorrow);
    }

  }
}