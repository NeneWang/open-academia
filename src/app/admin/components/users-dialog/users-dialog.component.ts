import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { User } from 'src/app/academia/models';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.css']
})
export class UsersDialogComponent {

  userForm: FormGroup;

  roleOptions: string[] = ['ADMIN', 'STUDENT', 'EMPLOYEE'];
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private academiaServiceService: AcademiaserviceService,
    private MatDialogRef: MatDialogRef<UsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    private user?: User
  ) {
    if (user) {
      this.userForm = this.fb.group({
        first: [user.first, Validators.required],
        last: [user.last, Validators.required],
        email: [user.email, Validators.required],
        password: [user.password, Validators.required],
        token: [user.token],
        avatar: [user.avatar],
        role: [user.role, Validators.required],
      });
      this.isEdit = true;
    } else {
      this.userForm = this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        token: [''],
        avatar: [''],
        role: ['', Validators.required],
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        id: new Date().getTime(),
        first: this.userForm.value.first,
        last: this.userForm.value.last,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        token: '',
        avatar: '',
        role: this.userForm.value.role,
      }

      this.academiaServiceService.createUser$(newUser);
   
      this.MatDialogRef.close(this.userForm.value);
    }
  }


}
