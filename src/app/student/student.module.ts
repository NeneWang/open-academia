import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ViewCoursesTableComponent } from 'src/app/student/components/courses-table/courses-table.component';
import { CoursesDetailComponent } from 'src/app/student/pages/courses-detail/courses-detail.component';
import { StudentsRoutingModule } from './students-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { RankingsComponent } from './pages/rankings/rankings.component';
import { ProfileScreenComponent } from './pages/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { SignupScreenComponent } from './pages/signup-screen/signup-screen.component';
import { CourseDialogViewComponent } from './pages/course-dialog-view/course-dialog-view.component';
import { CourseContentScreenComponent } from './pages/course-content-screen/course-content-screen.component';
import { ContentSectionBarComponent } from './components/content-section-bar/content-section-bar.component';
import { AssigmentPopupComponentComponent } from './components/assigment-popup-component/assigment-popup-component.component';
import { CourseEnrollmentDialogComponent } from './components/course-enrollment-dialog/course-enrollment-dialog.component';
import { CourseEnrollmentDialogDetailonlyComponent } from './course-enrollment-dialog-detailonly/course-enrollment-dialog-detailonly.component';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { studentFeature } from './store/student.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';


@NgModule({
  declarations: [
    ViewCoursesTableComponent,
    CoursesComponent,
    RankingsComponent,
    ProfileScreenComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    CourseDialogViewComponent,
    CourseContentScreenComponent,
    ContentSectionBarComponent,
    AssigmentPopupComponentComponent,
    CourseEnrollmentDialogComponent,
    CoursesDetailComponent,
    CourseEnrollmentDialogDetailonlyComponent,
    HomePageComponent,
    PrivacyComponent,
    TermsOfUseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    MatListModule,
    StoreModule.forFeature(studentFeature),
    EffectsModule.forFeature([StudentEffects]),
    // ViewCoursesTableComponent,

  ]
})
export class StudentModule { }
