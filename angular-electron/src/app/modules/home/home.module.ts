import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRouter } from './router';

@NgModule({
  imports: [
    CommonModule,
    HomeRouter
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
