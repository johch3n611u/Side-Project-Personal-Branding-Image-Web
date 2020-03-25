import { Injectable } from '@angular/core';
import { TodoItem } from '../shared/todo-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoItems: TodoItem[];

  constructor(private http: HttpClient) { }

  loadTodoList() {
    this.http
      .get<any>('./assets/todo-list.json')
      .subscribe(data => {
        this.todoItems = data;
      });
  }

  getTodoList() {
    return this.todoItems;
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }


}
