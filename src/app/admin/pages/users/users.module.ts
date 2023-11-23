import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserTableComponent } from 'src/app/admin/components/user-table/user-table.component';
import { UsersDialogComponent } from '../../components/users-dialog/users-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  }
]


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    UserTableComponent,
    UsersDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersModule { }
