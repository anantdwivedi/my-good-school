import { Component, trigger, state, style, transition, animate, } from '@angular/core';
import {  Router,NavigationEnd } from '@angular/router';
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  showNav = false;
  constructor(public router: Router){
     //localStorage.setItem('access_token',"12345stdgf dsfg");
    this.registerRouteEvents();

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
  
    
}
