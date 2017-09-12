import { Component, trigger, state, style, transition, animate, TemplateRef, } from '@angular/core';
import {  Router,NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from "ngx-bootstrap";
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modalRef: BsModalRef;
  title = 'app';
  showNav = false;
  public displayProfile:any;
  constructor(public router: Router, private modalService: BsModalService){
    //localStorage.setItem('access_token',"12345stdgf dsfg");
        this.displayProfile=true;
    this.registerRouteEvents();
   }
       public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
      
    hasLoggedIn(){
      if(localStorage.getItem('access_token')){
         return true;
      }else{
         return false;
      }
    }
  
registerRouteEvents(){
 this.router.events
  .subscribe((event) => {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd:', event);

      if(event.url=== "/login"  || event.url==="/"){
         this.showNav = true;
      }
      else{
                 this.showNav = false;

      }
    }
  });
}
 
  ngAfterViewInit(){
    $("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});
  }
  
     logOut(){
       localStorage.clear();
       this.router.navigate(['/login']);
     }  
}
