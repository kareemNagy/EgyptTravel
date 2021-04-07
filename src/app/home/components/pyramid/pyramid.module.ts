import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PyramidComponent } from './pyramid.component';
import { PyramidCultureModule } from './components/pyramid-culture/pyramid-culture.module';
import { PyramidKidsModule } from './components/pyramid-kids/pyramid-kids.module';
import { PyramidLeisureModule } from './components/pyramid-leisure/pyramid-leisure.module';
import { PyramidLifestyleModule } from './components/pyramid-lifestyle/pyramid-lifestyle.module';

@NgModule({
  imports: [
    CommonModule,
    PyramidCultureModule,
    PyramidLeisureModule,
    PyramidLifestyleModule,
    PyramidKidsModule
  ],
  declarations: [PyramidComponent],
  exports: [PyramidComponent]
})
export class PyramidModule { }
