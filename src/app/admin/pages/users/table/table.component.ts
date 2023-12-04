import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { UsersDialogComponent } from 'src/app/admin/components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-table-users',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users$: Observable<User[]>;

  constructor(
    private academiaserviceService: AcademiaserviceService,
    private matDialog: MatDialog
  ) {
    this.users$ = this.academiaserviceService.getUsers$()

  }

  addUser(): void {
    this.matDialog
      .open(UsersDialogComponent,
        {
          width: "80%",
        })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.users$ = this.academiaserviceService.createUser$({
              id: new Date().getTime(),
              first: result.first,
              last: result.last,
              email: result.email,
              password: result.password,
              token: '',
              avatar: '',
              role: result.role,
            });
          }
        },
      });
  }

  deleteUser(id: number): void {
    this.users$ = this.academiaserviceService.deleteUser$(id);
  }

  editUser(user: User): void {
    this.matDialog
      .open(UsersDialogComponent, {
        data: user,
        width: "80%",
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.users$ = this.academiaserviceService.updateUser$(user.id, {
              id: user.id,
              first: result.first,
              last: result.last,
              email: result.email,
              password: result.password,
              token: '',
              avatar: '',
              role: result.role,
            });
          }
        },
      });
  }

}
