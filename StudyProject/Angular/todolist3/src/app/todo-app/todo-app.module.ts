import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddFormComponent } from './add-form/add-form.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

import { TodoDonePipe } from './todo-done.pipe';
import { BsButtonDirective } from './bs-button.directive';

import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AddFormComponent,
    TodoItemsComponent,
    TodoAppComponent,
    TodoDonePipe,
    BsButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [TodoListService],
  exports: [
    TodoAppComponent,
  ]
})
export class TodoAppModule {
}
