import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    StorageService
  ]
})
export class CoreModule { }
