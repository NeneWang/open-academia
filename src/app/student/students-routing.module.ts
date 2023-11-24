import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetailComponent } from 'src/app/student/components/student-detail/student-detail.component';
import { IndexComponent as StudentsIndex } from './pages/users/index/index.component';
import { IndexComponent as CoursesIndex } from './pages/courses/index/index.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'courses',
        component: CoursesIndex
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




