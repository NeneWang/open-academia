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

@NgModule({
  declarations: [
    ViewCoursesTableComponent,
    CoursesComponent,
    RankingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
    
  ]
})
export class StudentModule { }
