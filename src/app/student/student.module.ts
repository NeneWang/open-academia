import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { RankingListComponent } from './components/ranking-list/ranking-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

// import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    CoursesDetailComponent,
    CoursesTableComponent,
    UserStatsComponent,
    RankingListComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentModule { }
