import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // 測試傳遞的假資料
  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: true
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

  // 提供傳遞內容的函式，讓 App.Component 的 View 可以做向 add-form.Component 傳遞事件
  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

}
