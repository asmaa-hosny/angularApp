import { StreamService } from './../Services/stream.service';
import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mystream:StreamService) { }

  ngOnInit() {
    this.mystream.streamData().subscribe(      
      next =>console.log(next),
      error =>console.log(error),
      ()=>console.log('Done')
    )
  }
   subscrip(){
     this.mystream.streamData().subscribe(
      
      next =>console.log(next),
      error =>console.log(error),
      ()=>console.log('Done')

    )
  }

}
