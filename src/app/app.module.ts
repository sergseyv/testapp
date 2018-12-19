import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { AddpersonComponent } from "./addperson/addperson.component";

import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StrcutPipe } from './strcut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    AddpersonComponent,
    StrcutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }