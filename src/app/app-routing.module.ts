import { CompanyComponent } from './about/company/company.component';
import { TeamComponent } from './about/team/team.component';
import { CareerComponent } from './about/career/career.component';
import { SkillComponent } from './skill/skill.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const routes:Routes=[
  {path:'' , component:HomeComponent}, 
  {path:'home' , component:HomeComponent },
  {path:'about' , children:[
    {path:'career' , component:CareerComponent },
    {path:'team' , component:TeamComponent },
    {path:'company' , component:CompanyComponent },
  ]},  
  {path:'skill' , component:SkillComponent},    
  {path:'contact' , component:ContactComponent}, 
  {path:'**' , component:PagenotfoundComponent}, 

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
