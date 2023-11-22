import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { IndexComponent  as CoursesIndex } from './student/pages/courses/index/index.component';
// import { IndexComponent  as UsersIndex } from './student/pages/users/index/index.component';

import { StudentsRoutingModule } from './student/students-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./student/students-routing.module').then(m => m.StudentsRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
