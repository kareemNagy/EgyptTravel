import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MediaComponent],
  exports: [MediaComponent]
})
export class MediaModule { }
