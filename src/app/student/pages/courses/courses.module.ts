import { Course } from 'src/app/academia/models';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewCoursesTableComponent } from 'src/app/student/components/courses-table/courses-table.component';
import { CoursesDetailComponent } from 'src/app/student/components/courses-detail/courses-detail.component';
import { UserStatsComponent } from 'src/app/student/components/user-stats/user-stats.component';
import { RankingListComponent } from 'src/app/student/components/ranking-list/ranking-list.component';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
]

@NgModule({
  declarations: [
    ViewCoursesTableComponent
  ],
  imports: [
    // CoursesDetailComponent,
    // ViewCoursesTableComponent,
    // UserStatsComponent,
    // RankingListComponent,
    // StudentDetailComponent,

    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoursesModule { }
