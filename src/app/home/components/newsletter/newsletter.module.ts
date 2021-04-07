import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsletterComponent],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
