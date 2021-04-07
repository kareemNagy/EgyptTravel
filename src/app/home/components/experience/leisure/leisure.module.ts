import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeisureComponent } from './leisure.component';
import { ExperienceNavigationModule } from '../experience-navigation/experience-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienceNavigationModule
  ],
  declarations: [LeisureComponent],
  exports: [LeisureComponent]
})
export class LeisureModule { }
