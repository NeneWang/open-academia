import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule
  ],
  declarations: [
  
  ]
})
export class AdminModule { }
