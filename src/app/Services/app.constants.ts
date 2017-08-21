import { Injectable } from '@angular/core';
import { CustomHttpService } from './default.header.service';
// import { CustomService } from './custom.service';



@Injectable()
export class Configuration {

public headers;
public options;
public server;
public url: string = "http://192.168.1.23:8080";
public Server: string = "http://192.168.1.21:8080/mygoodschool";
public baseUrl: string = "http://192.168.1.16:8080";

constructor(public http: CustomHttpService,
) {

}

public setUrl(url) {
// this.customService.setHeaderText(url);
this.server = this.baseUrl + "/admin/" + url;

}
}