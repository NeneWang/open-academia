import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User, UserCourse } from 'src/app/academia/models';

@Component({
  selector: 'app-view-user-dialog',
  templateUrl: './view-user-dialog.component.html',
  styleUrls: ['./view-user-dialog.component.css']
})


export class ViewUserDialogComponent {

  userCourses: UserCourse[] = [];

  @Input() user: User | undefined;

  constructor(
    private academiaserviceService: AcademiaserviceService,
    // @Inject(MAT_DIALOG_DATA) public user: User,
  ) {
    academiaserviceService.getEnrolledUserCourses$(this.user!.id).subscribe(
      (userCourse: any) => {
        this.userCourses = userCourse;
        console.log('userCourse', userCourse)
      }
    )
  }

  getName(): string {
    return `${this.user!.first} ${this.user!.last}`;
  }

  getRole(): string {
    return this.user!.role;
  }

}
