import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../todo-list.service';
import { TodoItem } from '../../shared/todo-item';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  placeholderText = '請輸入代辦事項';

  text = '';

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(text) {
    return this.todoListService.addTodo(text);
  }
}
