import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  // 屬性綁定(後向前) 傳遞資料
  placeholderText = '請輸入代辦事項';
  // 雙向綁定 傳遞資料
  todoText = '';

  // 新增 addTodoItem 事件，利用 @Output() 往外丟
  @Output() addTodoItem = new EventEmitter();

  // EventEmitter实例对象的emit方法，用来触发事件。它的第一个参数是事件名称，其余参数都会依次传入回调函数。
  // https://javascript.ruanyifeng.com/nodejs/events.html#toc3
  addTodo($event: MouseEvent) {
    this.addTodoItem.emit(this.todoText);
  }

  // 藉由雙向綁定即可不需要多於函式
  // changeTodoText($event: KeyboardEvent) {
  //   this.todoText = ($event.target as HTMLInputElement).value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
