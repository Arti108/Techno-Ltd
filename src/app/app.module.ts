import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UtilityComponent } from './utility/utility.component';
import { TeamComponent } from './team/team.component';
import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';
import { Test1Component } from './test1/test1.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UtilityComponent,
    TeamComponent,
    EmployeeComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
