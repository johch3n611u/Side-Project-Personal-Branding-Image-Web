import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../app/sign-in/sign-in.component';
import { HomeComponent } from '../app/home/home.component';
import { SignInGuard } from './sign-in/sign-in.guard';


const routes: Routes = [
  { path: 'Home', pathMatch: 'full', component: HomeComponent, canActivate: [SignInGuard] },
  { path: 'SignIn', pathMatch: 'full', component: SignInComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/SignIn' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
