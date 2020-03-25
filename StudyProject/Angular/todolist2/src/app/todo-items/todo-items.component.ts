import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../todo-list.service';
import { TodoItem } from './../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  // 建構式注入TodoListService，之前已經做過了
  constructor(private todoListService: TodoListService) { }

  // 在ngOnInit()中，要求TodoListService從後端抓取資料
  ngOnInit(): void {
    this.todoListService.loadTodoList();
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
}
