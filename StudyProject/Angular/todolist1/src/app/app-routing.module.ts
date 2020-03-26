import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherPageComponent } from './other-page/other-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'other', component: OtherPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
