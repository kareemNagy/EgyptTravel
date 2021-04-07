import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiscoverComponent],
  exports: [DiscoverComponent]
})
export class DiscoverModule { }
