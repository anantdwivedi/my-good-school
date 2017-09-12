import { Injectable } from '@angular/core';

@Injectable()

 export class DateService{
        public tomorrow:any;
       constructor(){
            
       }
public getTomorrow() {
      var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      var day = ("0" + (currentDate.getDate() + 1)).slice(-2)
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
      var year = currentDate.getFullYear()
      this.tomorrow = year + '-' + month + '-' + day;
      return this.tomorrow;
}
public getToday(){
    let date: Date = new Date();
     return date;
} 

 }