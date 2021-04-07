import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PyramidKidsComponent } from './pyramid-kids.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PyramidKidsComponent],
  exports: [PyramidKidsComponent]
})
export class PyramidKidsModule { }
