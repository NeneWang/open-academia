import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RankingsComponent } from './pages/rankings/rankings.component';
import { ProfileScreenComponent } from '../admin/pages/profile-screen/profile-screen.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'courses',
        component: CoursesComponent
      },

      { path: 'student/:id', component: StudentDetailComponent },
      {
        path: 'students',
        component: RankingsComponent
      },
      {
        path: 'rankings', component: RankingsComponent
      },
      {
        path: 'profile',
        component: ProfileScreenComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }




