import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RequestOptions, XHRBackend, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./Component/Login/login";
import { HomeComponent } from "./Component/Home/home";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./menu/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagingComponent } from "./Component/messaging/messaging";
import { InternshipComponent } from "./Component/internship/internship";
import { NewsUpdatesComponent } from "./Component/news and updates/new and updates";
import { EventsComponent } from "./Component/events/events";
import { SurveyComponent } from "./Component/survey/survey";
import { AccountComponent } from "./Component/account/account";
import { AddUserComponent } from "./Component/adduser/adduser";
import { AuthService } from "./Services/auth.service";
import { AuthGuard } from "./Services/auth-guard.service";
import { CustomHttpService} from './Services/default.header.service';
import { Configuration } from './Services/app.constants';
import { PollComponent } from "./Component/poll/poll";
import { CircularComponent } from "./Component/circular/circular";
import { ModalModule, CarouselModule } from 'ngx-bootstrap';
import { AddUserService } from "./Services/adduser.service";
import { CircularService } from "./Services/circular.service";
import {CalendarModule} from "ap-angular2-fullcalendar";
@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, AccountComponent, MenuComponent, MessagingComponent, 
    InternshipComponent, NewsUpdatesComponent,EventsComponent, PollComponent, SurveyComponent, AddUserComponent, CircularComponent 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CalendarModule
  ],
  providers: [ AuthService, AuthGuard, CustomHttpService, Configuration, AddUserService, CircularService,
    {
      provide: CustomHttpService, 
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) =>{
      return new CustomHttpService(backend, defaultOptions);
    },
    deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
