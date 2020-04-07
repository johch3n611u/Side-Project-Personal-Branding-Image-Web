import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MatModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
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
