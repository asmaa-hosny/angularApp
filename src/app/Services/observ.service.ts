import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservService {
  private nyStramData:Observable<string>;
  constructor() { }
  createstream(){

    this.nyStramData=new Observable (observer =>{
      setTimeout(() => {
        observer.next('Data _1')
      }, 1000);
      setTimeout(() => {
        observer.next('Data _2')
      }, 3000);
      setTimeout(() => {
        observer.next('Data _3')
      }, 5000);
      setTimeout(() => {
        observer.complete()
      }, 5000);

    })

return this.nyStramData; 
  }
}
