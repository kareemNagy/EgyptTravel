import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifestyleComponent } from './lifestyle.component';
import { ExperienceNavigationModule } from '../experience-navigation/experience-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienceNavigationModule
  ],
  declarations: [LifestyleComponent],
  exports: [LifestyleComponent]
})
export class LifestyleModule { }
