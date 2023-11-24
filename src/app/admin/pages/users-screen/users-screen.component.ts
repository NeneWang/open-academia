import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { UsersDialogComponent } from '../../components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users-screen',
  templateUrl: './users-screen.component.html',
  styleUrls: ['./users-screen.component.css']
})
export class UsersScreenComponent {

  users$: Observable<User[]>;
  
  constructor(
    private academiaserviceService: AcademiaserviceService,
    private matDialog: MatDialog
  ) {
    this.users$ = this.academiaserviceService.getUsers$()

  }

  addUser(): void {
    this.matDialog
      .open(UsersDialogComponent)
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
    console.log('user id', user)
    this.matDialog
      .open(UsersDialogComponent, {
        data: user,
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
