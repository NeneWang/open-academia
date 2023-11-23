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
      console.log(this.userForm.value);
      this.MatDialogRef.close(this.userForm.value);
    }
  }


}
