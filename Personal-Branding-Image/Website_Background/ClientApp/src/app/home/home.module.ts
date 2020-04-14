import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { ManagementComponent } from './mangement/management.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ManagementComponent,
    PostsComponent,
  ], imports: [
    AppRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
