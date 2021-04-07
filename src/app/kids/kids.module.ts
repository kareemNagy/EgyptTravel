import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KidsComponent],
  exports: [KidsComponent]
})
export class KidsModule { }
