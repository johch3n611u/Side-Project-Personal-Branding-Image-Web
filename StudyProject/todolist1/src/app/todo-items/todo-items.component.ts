import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent implements OnInit {

  // @Input('items') theTodoItems: TodoItem[];
  // 接收的屬性依然是items，但是會傳給theTodoItems這個變數
  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
