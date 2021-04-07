import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { ExperienceNavigationModule } from '../experience-navigation/experience-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ExperienceNavigationModule
  ],
  declarations: [KidsComponent],
  exports: [KidsComponent]
})
export class KidsModule { }
