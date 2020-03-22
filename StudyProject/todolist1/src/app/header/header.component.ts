import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Welcome to TodoList APP !!!';

  getDate() { return (new Date()); }

  constructor() { }

  ngOnInit(): void {
  }

}
