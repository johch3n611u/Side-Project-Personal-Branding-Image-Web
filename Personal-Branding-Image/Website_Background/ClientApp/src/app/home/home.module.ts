import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { ManagementComponent } from './mangement/management.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    HomeComponent,
    ManagementComponent,
    PostsComponent,
  ], imports: [
    AppRoutingModule,
    SharedMaterialModule,
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
