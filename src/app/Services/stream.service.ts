import { Observable, timer } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StreamService {
 private mydata:Observable<string>;
 streamData(){
  this.mydata=new Observable(observer =>{
    setTimeout(() => {
      observer.next('User 1')
    }, 1000);
    setTimeout(() => {
      observer.next('User 2')
    }, 2000);
    setTimeout(() => {
      observer.next('User 3')
    }, 3000);
    setTimeout(() => {
      observer.error('error')
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 8000);
  })

  return this.mydata; 
 }

  constructor() { }
}
