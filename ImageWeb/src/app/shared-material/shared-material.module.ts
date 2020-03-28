import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
  ], // 先imports，如果Module裡面沒有其他需要使用到Angular Material的元件，也可以直接export就好
  exports: [MatButtonModule] // 在exports，在使用到的Module中匯入即可，SharedMaterialModule一定要放在BrowserModule之後
  // https://angular.io/guide/ngmodules#shared-modules
})
export class SharedMaterialModule { }
