import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RequestOptions, XHRBackend, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./Component/Login/login";
import { HomeComponent } from "./Component/Home/home";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ModalModule, CarouselModule, AlertModule } from 'ngx-bootstrap';
import { AddUserService } from "./Services/adduser.service";
import { CircularService } from "./Services/circular.service";
import {CalendarModule} from "ap-angular2-fullcalendar";
import { PollService } from "./Services/poll.service";
import { CurrentComponent } from "./Component/survey/current/current";
import { AddComponent } from "./Component/survey/add/add";
import { SurveyService } from "./Services/survey.service";
import { SurveyViewComponent } from "./Component/survey/view/surveyview";
import { AddCircularComponent } from "./Component/circular/addcircular/addcircular";
import { CurrentPollComponent } from "./Component/poll/currentpoll/currentpoll";
import { AddPollComponent } from "./Component/poll/addpoll/addpoll";
import { CircularViewComponent } from "./Component/circular/view/circularview";
import { ProfileComponent } from "./Component/profile/profile";
import { CloseSurveyComponent } from "./Component/survey/close/closesurvey";
import { ClosePollComponent } from "./Component/poll/close/closepoll";
import { DateService } from "./Services/dateservice";
import { CurrentCircularComponent } from "./Component/circular/current/currentcircular";
import { CloseCircularComponent } from "./Component/circular/close/closecircular";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, AccountComponent,ProfileComponent, 
    InternshipComponent, NewsUpdatesComponent,EventsComponent, PollComponent, SurveyComponent,
    AddUserComponent, CircularComponent, CurrentComponent, AddComponent,SurveyViewComponent,
    AddCircularComponent,CurrentPollComponent,AddPollComponent,CircularViewComponent,
    CloseSurveyComponent,ClosePollComponent,CurrentCircularComponent,CloseCircularComponent, 
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
    AlertModule.forRoot(),
    CalendarModule,
  ],
  providers: [ AuthService, AuthGuard, CustomHttpService, Configuration,
   AddUserService, CircularService, PollService,SurveyService,DateService, 
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
