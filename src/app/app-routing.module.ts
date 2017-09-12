import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './Component/Login/login';
import { HomeComponent } from "./Component/Home/home";
import { InternshipComponent } from "./Component/internship/internship";
import { NewsUpdatesComponent } from "./Component/news and updates/new and updates";
import { EventsComponent } from "./Component/events/events";
import { SurveyComponent } from "./Component/survey/survey";
import { AccountComponent } from "./Component/account/account";
import { AddUserComponent } from "./Component/adduser/adduser";
import { AuthGuard } from "./Services/auth-guard.service";
import { PollComponent } from "./Component/poll/poll";
import { CircularComponent } from "./Component/circular/circular";
import { CurrentComponent } from "./Component/survey/current/current";
import { AddComponent } from "./Component/survey/add/add";
import { SurveyViewComponent } from "./Component/survey/view/surveyview";
import { AddCircularComponent } from "./Component/circular/addcircular/addcircular";
import { CurrentPollComponent } from "./Component/poll/currentpoll/currentpoll";
import { AddPollComponent } from "./Component/poll/addpoll/addpoll";
import { CircularViewComponent } from "./Component/circular/view/circularview";
import { ProfileComponent } from "./Component/profile/profile";
import { CloseSurveyComponent } from "./Component/survey/close/closesurvey";
import { ClosePollComponent } from "./Component/poll/close/closepoll";
import { CurrentCircularComponent } from "./Component/circular/current/currentcircular";
import { CloseCircularComponent } from "./Component/circular/close/closecircular";


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path:  'internship', component:InternshipComponent, canActivate:[AuthGuard]},
    { path: 'news', component:NewsUpdatesComponent, canActivate:[AuthGuard]},
    { path: 'events', component:EventsComponent, canActivate:[AuthGuard]},
    { path: 'poll', component:PollComponent, canActivate:[AuthGuard],
         children:[
           {
             path:'current_poll',component:CurrentPollComponent,canActivate:[AuthGuard]
           },
           {
             path:'close_poll',component:ClosePollComponent,canActivate:[AuthGuard]
           }
         ]
    },
    { path: 'add-poll', component:AddPollComponent, canActivate:[AuthGuard]},
    { path: 'survey', component:SurveyComponent, canActivate:[AuthGuard],
        children:[
             {
               path: 'current_survey',component:CurrentComponent, canActivate:[AuthGuard],
             },
             {
               path: 'close_survey', component:CloseSurveyComponent, canActivate:[AuthGuard],
             }
        ],
    
    },
    { path: 'add-survey', component: AddComponent, canActivate: [AuthGuard] },
    { path: 'view-survey/:id', component: SurveyViewComponent, canActivate: [AuthGuard] },
    { path: 'adduser', component:AddUserComponent,canActivate:[AuthGuard]},
    { path: 'account', component:AccountComponent,canActivate:[AuthGuard]},
    { path: 'circular', component:CircularComponent,canActivate:[AuthGuard],
          children:[
             {
               path: 'current_circular',component:CurrentCircularComponent, canActivate:[AuthGuard],
             },
             {
               path: 'close_circular', component:CloseCircularComponent, canActivate:[AuthGuard],
             }
        ],
   },
    { path: 'add-circular',component:AddCircularComponent, canActivate: [AuthGuard]},
    { path: 'view-circular/:id', component:CircularViewComponent, canActivate:[AuthGuard]}, 
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}