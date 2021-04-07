import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultureComponent } from './culture.component';
import { ExperienceNavigationModule } from '../experience-navigation/experience-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienceNavigationModule
  ],
  declarations: [CultureComponent],
  exports: [CultureComponent]
})
export class CultureModule { }
