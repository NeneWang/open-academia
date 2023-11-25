import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { UsersScreenComponent } from './pages/users-screen/users-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';

import { MatDialogModule } from '@angular/material/dialog';
import { CoursesDialogComponentComponent } from 'src/app/admin/components/courses-dialog-component/courses-dialog-component.component';
import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';

import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ProfileScreenComponent } from './pages/profile-screen/profile-screen.component';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule
  ],
  declarations: [
    UsersScreenComponent,
    CoursesScreenComponent,
    CoursesDialogComponentComponent,
    CourseTableComponent,
    UsersDialogComponent,
    UserTableComponent,
    MatDialogModule,
    ProfileScreenComponent
  ]
})
export class AdminModule { }
