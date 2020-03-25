import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent implements OnInit {

  // @Input() items: TodoItem[]; @Input('items') theTodoItems: TodoItem[];
  // 接收的屬性依然是items，但是會傳給theTodoItems這個變數
  @Input() items: TodoItem[];

  delTodo(delId: number) {
    if (confirm(delId + '確定刪除?')) {
      // for (const chkDelitems of this.items) {
      //   if (chkDelitems.id === delId) {
      //     console.log('delId:' + delId);
      //     console.log('this.items:' + this.items);
      //     console.log('chkDelitems.id:' + chkDelitems.id);
      //     console.log('chkDelitems:' + chkDelitems);
      //     this.items.splice(0, 1);
      //   }
      // }

      // Expected a 'for-of' loop instead of a 'for' loop with this simple iteration (prefer-for-of)tslint(1)
      for (var i = 0; i < this.items.length; i++) {
        if (delId == this.items[i].id) {
          this.items.splice(i, 1);
        }
      }
    }
  }

  itemChk($event: MouseEvent) {
    const repID = Number((($event.target as HTMLInputElement).id).replace('chk_', ''));
    console.log(repID);
    for (var i = 0; i < this.items.length; i++) {
      if (repID == this.items[i].id) {
        this.items[i].done = ($event.target as HTMLInputElement).checked;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
