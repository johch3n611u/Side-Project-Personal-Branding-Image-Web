import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MatModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    MatModules,
  ],
  exports: [
    MatModules,
  ]
})
export class SharedMaterialModule { }
