import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  responseJSON: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  doSignin() {

    const apiurl = 'https://localhost:44367/api/SignIn';
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };

    this.http.post<any>(apiurl, options)
      .subscribe(
        (value: Response) => {
          this.responseJSON = value.json();
          console.log(value.json());
        }, (error) => {
          console.log(error.json());
        }
      );

  }

}
