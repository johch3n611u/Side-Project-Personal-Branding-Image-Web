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
  constructor(private httpclient: HttpClient, private router: Router) { }
  result: string | null = null;
  cookieutil = new CookieUtil();
  ResponseVerificationInfo = '';

  SignIn(form): string | null {

    const apiurl = 'https://websitebackground20200423181629.azurewebsites.net/api/SignIn/Verification';
    const headers = new HttpHeaders({
      'Content-Type': 'text/json'
    });
    const options = {
      headers
    };
    //console.log(form);
    const body = JSON.stringify(form);
    this.httpclient.post<any>(apiurl, body, options)
      .subscribe(
        (value) => {
          //console.log('Response:' + value);
          // https://stackoverflow.com/questions/32459512/extracting-a-string-from-a-response-text
          if (value == "success") {
            this.cookieutil.setCookie('verificationInfo', value, 20 * 60 * 1000);
            this.ResponseVerificationInfo = value;
            this.router.navigate(['/Home/Management']);
            return this.result;
          } else {
            this.result = 'Error Username or Password, Please try again!';
          }
        }, (value) => {
          //console.log('Response:' + value);
          this.result = 'This background is for private use !!!';
        }
      );
    return this.result;
  }

  checkSignIn(): Observable<boolean> {
    let CookieVerificationInfo = this.cookieutil.getCookie('verificationInfo');

    //console.log('verificationInfo:' + CookieVerificationInfo);

    if (CookieVerificationInfo == '') {
      CookieVerificationInfo = this.ResponseVerificationInfo;
      this.cookieutil.setCookie('verificationInfo', CookieVerificationInfo, 20 * 60 * 1000);
    }

    if (CookieVerificationInfo == 'success') {
      return of(true);
    } else {
      alert('!!! Please SignIn Below !!!');
      this.router.navigate(['/SignIn']);
      return of(false);
    }

  }

}
