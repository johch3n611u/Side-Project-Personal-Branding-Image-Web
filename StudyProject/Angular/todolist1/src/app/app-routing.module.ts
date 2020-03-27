import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherPageComponent } from './other-page/other-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  // 基礎路由
  { path: 'home', component: HomePageComponent },
  { path: 'other', component: OtherPageComponent },
  // 路徑比對
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'sss', pathMatch: 'prefix', component: OtherPageComponent },
  // 重新導向
  { path: 'introduction', redirectTo: '/home', pathMatch: 'full' },
  // 子路由
  {
    path: 'account', children: [
      { path: 'register', component: AppComponent },
      { path: 'changepassword', component: OtherPageComponent },
    ]
  },
  // 路由參數
  // path 參數
  { path: 'home/:id', component: OtherPageComponent },
  // Query string 需要用到 ActivatedRoute Service
  // => app.component.ts



  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
