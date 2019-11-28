import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  
  constructor( private http:Http) { }
  callDataApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(x => x.json())
    )
  }
}
