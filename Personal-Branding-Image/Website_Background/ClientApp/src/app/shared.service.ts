import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loginServerUrl: string = '../assets/fackLogin.json';
  error: any;
  backUrl: string = '';
  LoginIn: any = { UsrID: '', PW: '' };
  LoginOut: any = {};

  setCookie(cookieName, cookieValue, cookieExpire) {
    let sCookie: string = '';
    sCookie += cookieName + '=' + cookieValue + ';';
    sCookie += 'expires=' + cookieExpire + ';';
    sCookie += '';
    document.cookie = sCookie;
  }

  getCookie(cname: string): string {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  constructor(private http: HttpClient, private router: Router) { }



  doLogin() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log(this.LoginIn);

  }
}

