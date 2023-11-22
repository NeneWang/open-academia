import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '',
    // component: TableComponent,
    component: IndexComponent,
  },
]


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesModule { }
