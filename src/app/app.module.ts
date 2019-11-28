import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './about/company/company.component';
import { TeamComponent } from './about/team/team.component';
import { CareerComponent } from './about/career/career.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpModule } from '@angular/http';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CompanyComponent,
    TeamComponent,
    CareerComponent,
    PagenotfoundComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
