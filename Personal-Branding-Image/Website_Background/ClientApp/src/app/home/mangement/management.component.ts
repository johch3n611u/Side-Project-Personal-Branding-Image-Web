import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-management',
  template: `
  <div class="management_box">

     <mat-paginator #paginator
               [length]="length"
               [pageSize]="14"
               [pageSizeOptions]="[14, 25, 50]">
     </mat-paginator>

     <mat-form-field>
        <input matInput #filter placeholder="Search">
     </mat-form-field>

     <mat-table [dataSource]="NewsDataSourse" matSort #sortTable="matSort">
       <ng-container matColumnDef="id">
           <mat-header-cell *matHeaderCellDef mat-sort-header>id</mat-header-cell>
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
       <ng-container matColumnDef="createdAt" >
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
  </div>
`,
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  NewsDataSourse = new MatTableDataSource<any>();
  length: number | null;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<any>(
      '/assets/fack.json'
    ).subscribe(data => {
      this.NewsDataSourse.data = data;
      this.length = data.length;
      this.NewsDataSourse.paginator = this.paginator;
      this.NewsDataSourse.sort = this.sort;
    });
    setTimeout(() => {
      fromEvent<any>(this.filter.nativeElement, 'keyup')
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(() => {
          this.NewsDataSourse.filter = (this.filter.nativeElement as HTMLInputElement).value;
        });
    }, 0);
  }

  try(abc) { console.log(abc); }

}
