import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/academia/models';
import { ViewUserDialogComponent } from '../view-user-dialog/view-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  constructor(
    private matDialog: MatDialog,
  ) {

  }

  @Input()
  dataSource: User[] = [];

  @Output()
  editUser = new EventEmitter();

  @Output()
  deleteUser = new EventEmitter();

  viewUserDialog(user: User): void {
    // this.editUser.emit(user);

    console.log('view user dialog', user);
    this.matDialog.open(ViewUserDialogComponent, {
      data: user,
      width: "90%",
    })
  }

  displayedColumns = ['first', 'last', 'email', 'role', 'actions'];
}

