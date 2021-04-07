import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsonComponent } from './whatson.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WhatsonComponent],
  exports: [WhatsonComponent]
})
export class WhatsonModule { }
