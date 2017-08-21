import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

function getToken(): any {
  let token = localStorage.getItem('access_token');
  let header;
  if (!token) {
    console.log("inside basic//////");
    header ='Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=';
  } else {
    header = 'Bearer '+ localStorage.getItem('access_token') || '';
  }
  
  return header;
}

@Injectable()
export class CustomHttpService extends Http {
  constructor (backend: XHRBackend, options: RequestOptions) {
    options.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `${getToken()}`,
      'account': 'admin'
    });
    super(backend, options);
  }

  // its like interceptor, calls by each methods internally like get, post, put, delete etc
  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      options.headers.set('Content-Type', 'application/json');
      options.headers.set('Authorization', `${getToken()}`);
      options.headers.set('account', 'admin');
    } else {
      url.headers.set('Content-Type', 'application/json');
      url.headers.set('Authorization', `${getToken()}`);
      url.headers.set('account', 'admin');
    }
    return super.request(url, options);
  }
}