import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { VocabFormComponent } from './vocabForm/vocabForm.component';

import { HomeRouter } from './router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRouter,
  ],
  declarations: [
    HomeComponent,
    VocabFormComponent
  ]
})
export class HomeModule { }
