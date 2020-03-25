import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Service 架構 Sample TodoList !!!';

  jsObjdate = new Date();

  jsonObj: Object = {
    name: 'wellwind',
    age: 30,
    sex: 'M'
  };

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = this.checkTime(mm);
    ss = this.checkTime(ss);
    var datetime = hh + ":" + mm + ":" + ss;
    var timeoutId = setTimeout(this.getDate, 500);
    return datetime
  }

  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
