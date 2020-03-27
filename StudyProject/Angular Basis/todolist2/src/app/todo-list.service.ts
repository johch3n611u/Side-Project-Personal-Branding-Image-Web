import { Injectable } from '@angular/core';
import { TodoItem } from './shared/todo-item';

// import { Http } from '@angular/http'; // 我們要使用的Http
// 自從Angular 4.3版以後，新的網路傳輸HttpClient在Angular中被引入。
// 而官方在Angular第五版開始，將舊的 HttpModule被標示為不建議使用，
// 因此在此為各位介紹為什麼官方要採用HttpClient，而捨棄舊的Http
// https://dotblogs.com.tw/Leo_CodeSpace/2018/03/05/142805
// https://angular.io/guide/http
import { HttpClient } from '@angular/common/http';
// ERROR in ./src/app/todo-list.service.ts
// Module not found: Error: Can't resolve 'rxjs / add / operator / toPromise'
// https://stackoverflow.com/questions/50552653/angular-6-module-not-found-error-regarding-rxjs
// import 'rxjs/add/operator/toPromise'; // 幫助我們將RxJs轉為Promise

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  // 原來的資料移到assets/todo-list.json裡面去了
  todoItems: TodoItem[];
  // todoItems: TodoItem[] = [{
  //   id: 1,
  //   value: 'Todo Item No.1',
  //   done: false
  // }, {
  //   id: 2,
  //   value: 'Todo Item No.2',
  //   done: true
  // }, {
  //   id: 3,
  //   value: 'Todo Item No.3',
  //   done: false
  // }];

  // constructor() { }
  constructor(private http: HttpClient) { }

  // 使用http.get取得後端資料
  // http.get會回傳RxJS的Observable物件
  // 我們先用.toPromise()轉回我們會使用的ES6 Prmoise
  // 並利用toPromise()轉成ES6的Promise

  // 对于未来的访问者 ：在新的HttpClient （Angular 4.3+）中， response对象默认为JSON，因此您不再需要response.json().data了。 只需直接使用response即可。
  // https://stackoom.com/question/37274/%E7%B1%BB%E5%9E%8B-%E5%AF%B9%E8%B1%A1-%E4%B8%8A%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%B1%9E%E6%80%A7-json
  // 在 Angular 使用 HttpClient 的各種 TypeScript 地雷與陷阱-Will 保哥
  // https://blog.miniasp.com/post/2019/01/20/Angular-HttpClient-Pitfall-and-Tricks
  loadTodoList() {
    this.http
      .get<any>('/assets/todo-list.json')
      .subscribe(data => {
        this.todoItems = data;
      });
    // .subscribe(this.todoItems = console.log(response));
    // .toPromise()
    // .then(response => {
    //   this.todoItems = response.json();
    // });
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
    // // 給予一個新的物件參考
    // this.todoItems = [...this.todoItems];
  }

}
