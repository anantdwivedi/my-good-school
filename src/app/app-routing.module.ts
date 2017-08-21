import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './Component/Login/login';
import { HomeComponent } from "./Component/Home/home";
import { MessagingComponent } from "./Component/messaging/messaging";
import { InternshipComponent } from "./Component/internship/internship";
import { NewsUpdatesComponent } from "./Component/news and updates/new and updates";
import { EventsComponent } from "./Component/events/events";
import { SurveyComponent } from "./Component/survey/survey";
import { AccountComponent } from "./Component/account/account";
import { AddUserComponent } from "./Component/adduser/adduser";
import { AuthGuard } from "./Services/auth-guard.service";
import { PollComponent } from "./Component/poll/poll";
import { CircularComponent } from "./Component/circular/circular";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'messaging', component: MessagingComponent, canActivate: [AuthGuard] },
    { path:  'internship', component:InternshipComponent, canActivate:[AuthGuard]},
    { path: 'news and updates', component:NewsUpdatesComponent, canActivate:[AuthGuard]},
    { path: 'events', component:EventsComponent, canActivate:[AuthGuard]},
    { path: 'poll', component:PollComponent, canActivate:[AuthGuard]},
    { path: 'survey', component:SurveyComponent, canActivate:[AuthGuard]},
    { path: 'adduser', component:AddUserComponent,canActivate:[AuthGuard]},
    { path: 'account', component:AccountComponent,canActivate:[AuthGuard]},
    { path: 'circular', component:CircularComponent,canActivate:[AuthGuard]}, 
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard]  }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}