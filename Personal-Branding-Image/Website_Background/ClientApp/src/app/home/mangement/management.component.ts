import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  NewsDataSourse = new MatTableDataSource<any>();

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<any>(
      '/assets/fack.json'
    ).subscribe(data => {
      this.NewsDataSourse = data;
    });
  }

}
