import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';

import { MatDialogModule } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';

import { UserTableComponent } from './components/user-table/user-table.component';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';
// import { ViewCourseDialogComponent } from './components/view-course-dialog/view-course-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule,
    MatDialogModule,
  ],
  declarations: [
    UsersScreenComponent,
    CoursesScreenComponent,
    CourseTableComponent,
    UsersDialogComponent,
    UserTableComponent,
    ViewUserDialogComponent,
    // ViewCourseDialogComponent,
  ]
})
export class AdminModule { }
