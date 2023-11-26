import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewCoursesTableComponent } from 'src/app/student/components/courses-table/courses-table.component';
import { CoursesDetailComponent } from 'src/app/student/components/courses-detail/courses-detail.component';
import { RouterModule } from '@angular/router';
import { StudentsRoutingModule } from './students-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { RankingsComponent } from './pages/rankings/rankings.component';
import { ProfileScreenComponent } from './pages/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { SignupScreenComponent } from './pages/signup-screen/signup-screen.component';

@NgModule({
  declarations: [
    ViewCoursesTableComponent,
    CoursesComponent,
    RankingsComponent,
    ProfileScreenComponent,
    LoginScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
    
  ]
})
export class StudentModule { }
