import { Component, OnInit } from '@angular/core';
import { MessagingService } from "../../Services/messaging.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.html',
  styleUrls: ['./messaging.css']
})
export class MessagingComponent implements OnInit {
      sendsms: FormGroup;
      public message:any;
      public date:any;
      public messages:any;
      public employee:any[]=[];
      public employes:any[]=[];
      public getMessageConversation:any[]=[];
    //   public getMessageUserConversation:any[]=[]
      public subjectName:any;
      public pageNo=1;
      public ishide;
      public isshow;
      public conversationId:any;
      constructor(private messagingservic:MessagingService,private fb: FormBuilder){
               this.getUsers();
               this.getMessage();
                 this.isshow=true;
      } 
      ngOnInit(){
           this.sendsms = this.fb.group({
               'subject': ['',], 
               'message': ['',], 
               'againstUserId': ['',],
           })
             
      }
      messageSend(){
          let obj=this.sendsms.value
           console.log(obj);
            this.messagingservic.postMessage(obj)
             .subscribe((res)=>{  
               },
             (err)=>{
           
              });
      }
       getMessage(){
          this.messagingservic.getMessage(this.pageNo).subscribe((res) =>{
               console.log("getmessage",res);
                this.employes=res;
                 console.log("su",this.subjectName);
          })
    }
    getMessageConversationById(){
        this.messagingservic.getMessageConversationById(this.pageNo,this.conversationId).subscribe((res) =>{
                this.getMessageConversation=res;
              console.log("conversationmessageDetails",res);
        })
    }
    getUsers(){
        this.messagingservic.getUsers().subscribe((res:any) =>{
              this.employee=res;
              console.log(res);
        })
    }
       
    createNewMessage(){
        this.ishide=false;
        this.isshow=true;
    }
    clickList(conversationListId:string,subject:string){
        this.isshow=false;
        this.ishide=true;
        this.conversationId=conversationListId;
        this.subjectName=subject;
        this.getMessageConversationById();
       }
       
       send(){
           let q:any = {};
          // let p=(this.conversationId);
            // q["conversationId"]=this.conversationId;
           q = {
               "conversationId":this.conversationId,
               "message":this.message,
              };
            this.messagingservic.userSidePost(q).subscribe((res) =>{ 
            })
             this.getMessageConversation.push(q);
             console.log("main data",this.getMessageConversation);
              this.message="";
       }
   
}