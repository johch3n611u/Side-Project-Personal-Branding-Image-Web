import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../app/sign-in/sign-in.component';
import { HomeComponent } from '../app/home/home.component';
import { SignInGuard } from './sign-in/sign-in.guard';
import { ManagementComponent } from '../app/home/mangement/management.component';
import { PostsComponent } from '../app/home/posts/posts.component';

// ### Original
const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
     canActivate: [SignInGuard],
    children: [
      { path: 'Edit/:id', component: PostsComponent },
      { path: 'Publish', redirectTo: '/Home/Edit/0' },
      { path: 'Management', component: ManagementComponent },
      { path: '**', pathMatch: 'full', redirectTo: '/Home' }
    ]
  },
  { path: 'SignIn', pathMatch: 'full', component: SignInComponent, },
  { path: '**', pathMatch: 'full', redirectTo: '/SignIn' },
];

// ### Template https://forum.angular.tw/t/topic/1758/2
// const routes: Routes = [
//   {
//     path: '',
//     canActivate: [AuthGuard],
//     component: SidenavComponent,
//     children: [
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: 'Management1', component: Management1Component },
//       { path: 'Management2 ', component: Management2Component },
//     ],
//   },
//   { path: 'login', component: LoginComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes
    //, { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
