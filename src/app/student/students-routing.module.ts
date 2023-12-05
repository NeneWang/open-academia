import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RankingsComponent } from './pages/rankings/rankings.component';
import { ProfileScreenComponent } from './pages/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { SignupScreenComponent } from './pages/signup-screen/signup-screen.component';
import { CoursesDetailComponent } from './pages/courses-detail/courses-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

import { studentGuard } from '../core/student.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      },
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
        path: 'profile', component: ProfileScreenComponent,
        canActivate: [studentGuard]

      },
      {
        path: 'login', component: LoginScreenComponent
      },
      {
        path: 'signup', component: SignupScreenComponent
      },
      {
        path: 'privacy', component: PrivacyComponent
      },
      {
        path: 'terms-of-use', component: TermsOfUseComponent
      },
    ])
  ],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }




