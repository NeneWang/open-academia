import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';


import { UserTableComponent } from './components/user-table/user-table.component';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';
import { ViewEnrollCourseComponent } from './components/view-enroll-course/view-enroll-course.component';

import { adminReducer } from './store/admin.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    StoreModule.forFeature('admin', adminReducer)
  ],
  declarations: [
    UsersScreenComponent,
    CoursesScreenComponent,
    CourseTableComponent,
    UsersDialogComponent,
    UserTableComponent,
    ViewUserDialogComponent,
    MatListModule,
    ViewEnrollCourseComponent
    // ViewCourseDialogComponent,
  ]
})
export class AdminModule { }
