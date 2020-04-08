import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
// import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieUtil } from './shared/cookie-util';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient, private router: Router) { }
  result: string | null = null;
  cookieutil = new CookieUtil();
  ResponseVerificationInfo = '';

  SignIn(form) {

    const apiurl = 'https://localhost:44367/api/SignIn';
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    console.log(form);
    const body = JSON.stringify(form);
    this.http.post<any>(apiurl, body, options)
      .subscribe(
        (value: Response) => {
          console.log('Response:' + value);
          // https://stackoverflow.com/questions/32459512/extracting-a-string-from-a-response-text
          if (JSON.stringify(value) === '"success"') {
            this.cookieutil.setCookie('verificationInfo', value, 20 * 60 * 1000);
            this.ResponseVerificationInfo = JSON.stringify(value);
            this.router.navigate(['/Home']);
          } else {
            this.result = 'Error Password, Please try again !!!';
          }
        }, (value) => {
          console.log('Response:' + value);
          this.result = 'This background is for private use !!!';
        }
      );
    return this.result;
  }

  checkSignIn(): Observable<boolean> {
    let CookieVerificationInfo = this.cookieutil.getCookie('verificationInfo');

    console.log('verificationInfo:' + CookieVerificationInfo);

    if (CookieVerificationInfo === '') {
      CookieVerificationInfo = this.ResponseVerificationInfo;
      this.cookieutil.setCookie('verificationInfo', CookieVerificationInfo, 20 * 60 * 1000);
    }

    if (CookieVerificationInfo === '"success"') {
      return Observable.throw(true);
    } else {
      alert('!!! Please SignIn Below !!!');
      return Observable.throw(false);
    }

  }

}
