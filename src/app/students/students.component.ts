import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students:any;
  
  constructor() { }


  ngOnInit() {
    this.students = [
      {firstname:'Seif eddine',lastname:'HALL', gender:'male' , note:12 },
      {firstname:'Issam',lastname:'BEN SALLEM', gender:'male' , note:14 },
      {firstname:'Jihane',lastname:'AL HAMDI', gender:'female' , note:13 },
      {firstname:'Fares',lastname:'KAMAL', gender:'male' , note:16 },
      {firstname:'Imene',lastname:'FEHMI', gender:'female' , note:14 },
    ];
  }

}
