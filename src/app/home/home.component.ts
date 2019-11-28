import { ApiservService } from './../Services/apiserv.service';
import { StreamService } from './../Services/stream.service';
import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { ObservService } from '../Services/observ.service';
import { CallApiService } from '../Services/call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mystream:StreamService , private Api:ApiservService,
     private mydata:ObservService , private myApi:CallApiService) { }

  ngOnInit() {
    // this.mystream.streamData().subscribe(      
    //   next =>console.log(next),
    //   error =>console.log(error),
    //   ()=>console.log('Done')
    // )
  }
   subscrip(){
     this.mystream.streamData().subscribe(
      
      next =>console.log(next),
      error =>console.log(error),
      ()=>console.log('Done')

    )
  }
  callApi(){
    this.Api.call().subscribe(
      next=>{
        console.log(next);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log('Done')
      }
    )
  }
  Subcripe(){
    this.mydata.createstream().subscribe(
      next=>{
        console.log(next); 
      }, 
      error=>{
        console.log(error); 
      },
      ()=>{
        console.log('Done'); 
      }
    )
  }
  SubcripeAPI(){
    this.myApi.callDataApi().subscribe(
      next=>{
        console.log(next); 
      }, 
      error=>{
        console.log(error); 
      },
      ()=>{
        console.log('Done'); 
      }
    )
  }

}
