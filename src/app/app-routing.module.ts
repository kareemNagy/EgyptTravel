import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultureComponent } from './culture/culture.component';

import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LeisureComponent } from './leisure/leisure.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'culture',
    component: CultureComponent
  },
  {
    path: 'leisure',
    component: LeisureComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
