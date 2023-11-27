import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RankingsComponent } from './pages/rankings/rankings.component';
import { ProfileScreenComponent } from './pages/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { SignupScreenComponent } from './pages/signup-screen/signup-screen.component';
import { CoursesDetailComponent } from './pages/courses-detail/courses-detail.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'courses/:id',
        component: CoursesDetailComponent
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
        path: 'profile', component: ProfileScreenComponent
      },
      {
        path: 'login', component: LoginScreenComponent
      },
      {
        path: 'signup', component: SignupScreenComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }




