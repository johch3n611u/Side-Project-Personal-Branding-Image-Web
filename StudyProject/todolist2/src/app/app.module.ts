import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

import { TodoListService } from './todo-list.service';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TodoDonePipe } from './todo-done.pipe';
import { BsButtonDirective } from './bs-button.directive';
import { BsDirective } from './bs-button.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe,
    BsButtonDirective,
    BsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
