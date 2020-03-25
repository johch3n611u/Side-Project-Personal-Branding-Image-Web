import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// Angulare官方第五版開始，將舊的 HttpModule被標示為不建議使用，建議改用 HttpClient
// https://dotblogs.com.tw/H20/2018/04/18/143926

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddFormComponent } from './add-form/add-form.component';

import { OtherPageComponent } from './other-page/other-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemsComponent,
    AddFormComponent,
    OtherPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
