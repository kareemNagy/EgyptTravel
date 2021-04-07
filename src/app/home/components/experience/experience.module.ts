import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { CultureModule } from './culture/culture.module';
import { LeisureModule } from './leisure/leisure.module';
import { LifestyleModule } from './lifestyle/lifestyle.module';
import { KidsModule } from './kids/kids.module';

@NgModule({
  imports: [
    CommonModule,
    CultureModule,
    LeisureModule,
    LifestyleModule,
    KidsModule,

  ],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceModule { }
