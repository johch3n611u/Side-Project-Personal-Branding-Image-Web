import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-management',
  template: `
     <mat-table [dataSource]="NewsDataSourse">
       <ng-container matColumnDef="id">
           <mat-header-cell *matHeaderCellDef>id</mat-header-cell>
           <mat-cell *matCellDef="let row">{{ row.id }}</mat-cell>
       </ng-container>
       <ng-container matColumnDef="sort">
           <mat-header-cell *matHeaderCellDef>sort</mat-header-cell>
           <mat-cell *matCellDef="let row">{{ row.sort }}</mat-cell>
       </ng-container>
       <ng-container matColumnDef="title">
           <mat-header-cell *matHeaderCellDef>title</mat-header-cell>
           <mat-cell *matCellDef="let row">{{ row.title }}</mat-cell>
       </ng-container>
       <ng-container matColumnDef="subtitle">
           <mat-header-cell *matHeaderCellDef>subtitle</mat-header-cell>
           <mat-cell *matCellDef="let row">{{ row.subtitle }}</mat-cell>
       </ng-container>
       <ng-container matColumnDef="createdAt">
           <mat-header-cell *matHeaderCellDef>createdAt</mat-header-cell>
           <mat-cell *matCellDef="let row">{{ row.createdAt }}</mat-cell>
       </ng-container>

       <ng-container matColumnDef="management">
           <mat-header-cell *matHeaderCellDef>management</mat-header-cell>
           <mat-cell *matCellDef="let row">
             <button mat-raised-button (click)="try(row)">Edit</button>
             <button mat-raised-button >Delete</button>
           </mat-cell>
       </ng-container>

       <mat-header-row *matHeaderRowDef="['id','sort','title','subtitle','createdAt','management']"></mat-header-row>

       <mat-row *matRowDef="let row; columns: ['id','sort','title','subtitle','createdAt','management']"></mat-row>

     </mat-table>
`,
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

  try(abc) { console.log(abc); }

}
