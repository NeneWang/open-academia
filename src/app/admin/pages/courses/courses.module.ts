import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesDialogComponentComponent } from '../../components/courses-dialog-component/courses-dialog-component.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';


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
