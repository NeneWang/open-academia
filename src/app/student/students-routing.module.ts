import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'courses',
        loadChildren: () =>
          import('./pages/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },

      { path: 'student/:id', component: StudentDetailComponent },
      {
        path: 'students',
        loadChildren: () =>
          import('./pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      }
    ])
  ],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }




