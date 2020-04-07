import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';
import { SignInComponent } from './sign-in/sign-in.component';

import { SharedService } from '../app/shared.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
