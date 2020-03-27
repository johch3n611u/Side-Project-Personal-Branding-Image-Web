import { Component, OnInit } from '@angular/core';
// Query string
import { ActivatedRoute, ParamMap, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  name;

  queryString = '?name=name123&naumber=1';
  url = '/login' + this.queryString;

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParamMap.get('name');
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + this.name);
  }

  navigate() {
    const options: NavigationExtras = {
      queryParams: {
        name: '54789999999999999999999'
      },
    };
    this.router.navigate(['/home'], options);
  }

  navigateNoViewPath() {
    const options: NavigationExtras = {
      queryParams: {
        name: '547811111111111111111111111111111'
      },
      skipLocationChange: true
    };
    this.router.navigate(['/introduction'], options);
  }

  navigateURL() {
    this.router.navigateByUrl('/home/saasd');
  }



}
