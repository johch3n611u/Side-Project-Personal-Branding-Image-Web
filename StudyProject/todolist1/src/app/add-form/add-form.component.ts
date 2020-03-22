import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholderText = '請輸入代辦事項';

  addTodo($event: MouseEvent) {
    alert(this.placeholderText);
    console.log($event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
