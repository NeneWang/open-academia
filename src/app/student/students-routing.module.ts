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
        title: "Home",
        component: HomePageComponent,
      },
      {
        path: 'courses',
        title: "Courses",
        component: CoursesComponent
      },
      {
        path: 'courses/:id',
        title: "Courses",
        component: CoursesDetailComponent
      },

      {
        path: 'student/:id',
        component: StudentDetailComponent,
        title: "Student Detail",
      },
      {
        path: 'students',
        component: RankingsComponent,
        title: "Student Rankings",
      },
      {
        path: 'rankings', component: RankingsComponent,
        canActivate: [studentGuard],
        title: "Student Rankings",
      },
      {
        path: 'profile', component: ProfileScreenComponent,
        canActivate: [studentGuard],
        title: "Profile",

      },
      {
        path: 'login', component: LoginScreenComponent,
        title: "Login",
      },
      {
        path: 'signup', component: SignupScreenComponent,
        title: "Sign Up",
      },
      {
        path: 'privacy', component: PrivacyComponent,
        title: "Privacy",
      },
      {
        path: 'terms-of-use', component: TermsOfUseComponent,
        title: "Terms of Use",
      },
    ])
  ],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }




