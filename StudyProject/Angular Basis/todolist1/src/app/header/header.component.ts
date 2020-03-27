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

  today;
  hh;
  datetime;
  timeoutId;

  constructor() { }

  ngOnInit(): void {
    function getDate() {
      this.today = new Date();
      this.hh = this.today.getHours();
      let mm = this.today.getMinutes();
      let ss = this.today.getSeconds();
      mm = checkTime(mm);
      ss = checkTime(ss);
      this.datetime = this.hh + ':' + mm + ':' + ss;
      this.timeoutId = setTimeout(this.getDate, 500);
      return this.datetime;
    }
  }

  // reallyGettime() { return '5566' + this.datetime; }

}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
