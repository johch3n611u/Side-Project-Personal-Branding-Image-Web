import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // 內嵌綁定(後向前) 傳遞資料
  title = 'Welcome to TodoList APP !!!';
  getDate() { return (new Date()); }

  constructor() { }

  ngOnInit(): void {

  }

}
