import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { CustomHttpService } from './default.header.service';
import { Configuration } from "./app.constants";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
       baseurl: string;
  constructor(private http: CustomHttpService,
       private config: Configuration) {
         this.baseurl = this.config.baseUrl;
  }


login(data: any) {
    let url = "/oauth/token?grant_type=password&username=" + data.username + "&password=" + data.password;
    return this.http.post(this.baseurl + url, {})
      .map(this.extractData)
      .catch(this.handleError);
  }
rolid() {
    return this.http.post(this.baseurl + "/admin/roles", [])
      .map((response: Response) => {
        console.log(response);
        return response.json();
      }).catch((err) => {
        return err;
      })
  }
getrollid() {
    return this.http.get(this.baseurl + "/admin/roles"
    ).map((res) => res.json())
      .catch((err) => err);
  }
getUserinfo(name: any) {
     return this.http.get(this.baseurl + "/admin"
     ).map((res) => res.json())
     .catch((err) => err);
}
hasLoggedIn() {
     if (localStorage.getItem('access_token')) {
      return true;
     } else {
       return false;
    }
  }
private extractData(res: Response) {
     let body = res.json();
     return body || {};
  }
private handleError(error: Response | any) {
     return Observable.throw(error.status);
  }

}