import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }
