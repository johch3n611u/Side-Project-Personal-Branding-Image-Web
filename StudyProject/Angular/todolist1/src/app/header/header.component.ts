import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // 內嵌綁定(後向前) 傳遞資料
  title = 'Welcome to TodoList APP !!!';

  // getDate() { return (new Date()); }

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

  constructor() { }

  ngOnInit(): void {

  }

}
