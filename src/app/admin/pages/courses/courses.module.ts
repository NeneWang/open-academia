import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableComponent } from './table/table.component';
import { IndexComponent } from './index/index.component';

import { MatDialogModule } from '@angular/material/dialog';
import { CoursesDialogComponentComponent } from '../../components/courses-dialog-component/courses-dialog-component.component';
import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';


const routes: Routes = [
  
  {
    path: 'table',
    component: TableComponent,
    title: 'Courses'
  },
  {
    path: '',
    // component: TableComponent,
    component: IndexComponent,
    title: 'Courses'
  },
]


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    CoursesDialogComponentComponent,
    CourseTableComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  exports: [RouterModule]
})
export class CoursesModule { }
