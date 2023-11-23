import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminGuard } from './core/admin.guard';
import { studentGuard } from './core/student.guard';  

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./student/students-routing.module').then(m => m.StudentsRoutingModule)
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
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
